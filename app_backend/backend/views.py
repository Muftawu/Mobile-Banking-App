from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import WithdrawSerializer, DepositSerializer, UserSerializer, AccountSerializer, QuickTransferSerializer
from django.contrib.auth.decorators import login_required
from . models import Deposit, Withdraw, QuickTransfer
from django.contrib.auth import login, logout, authenticate 
from . models import User, Account
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from termcolor import colored


@api_view(['POST'])
def login_user(request):
    username = request.data['username']
    password = request.data['password']
    PIN = request.data['PIN']

    if not username or not password:
        return Response({'error': 'Both username and password are required.'}, status=status.HTTP_400_BAD_REQUEST)

    user = authenticate(username=username, password=password)
    account = Account.objects.get(user=user, PIN=PIN)
    print(colored(account, 'green'))
    print(colored(PIN, 'green'))

    if user is not None and account:
        refresh = RefreshToken.for_user(user)
        response_data = {
            'access_token': str(refresh.access_token),
            'refresh_token': str(refresh)
        }
        return Response(response_data, status=status.HTTP_200_OK)

    return Response({'error': 'Invalid credentials.'}, status=status.HTTP_401_UNAUTHORIZED)


@api_view(['POST'])
def register(request):
    username = request.data["username"]
    password = request.data["password"]
    email = request.data["email"]
    pin = request.data["PIN"]

    if not username or not password:
        return Response({'error': 'Both username and password are required.'}, status=status.HTTP_400_BAD_REQUEST)
    
    try:
        user_obj = User.objects.create_user(username=username, email=email, password=password)
        account = Account(user=user_obj, PIN=pin)

        account.save()

        refresh = RefreshToken.for_user(user_obj)
        response_data = {
            'access_token': str(refresh.access_token),
            'refresh_token': str(refresh),
            
        }
        return Response(response_data, status=status.HTTP_201_CREATED)
    
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

# DEPOSIT
@api_view(['POST'])
def deposit(request):
    username = request.data["username"]
    deposit_amount = request.data["amount"]
    user_pin = request.data["PIN"]

    user = User.objects.get(username=str(username))
    print(user)
    account = Account.objects.get(user=user, PIN=user_pin)
    print(username, account.PIN)
    print("Submitted pin", user_pin)

    print("account balance: ", account.balance, "deposit: ", deposit_amount)

    serializer = DepositSerializer(data=request.data)

    if serializer.is_valid():
        deposit = Deposit.objects.create(account=account, amount=deposit_amount)
        print("Deposit Amount" , deposit)
        account.balance = serializer.credit(account.balance, deposit.amount)
        account.save()
        deposit.save()
        print("new balance" , account.balance)
        response_data = {
            'message': f"Deposit of ${deposit_amount} made successfully",
        }
        return Response(response_data, status=status.HTTP_201_CREATED)
    else:
        print("Invalid PIN")
    
    
    return Response({"Error":"Invalid transaction"})

# WITHDRAW 
@api_view(['POST'])
def withdraw(request):
    withdraw_amount = request.data["amount"]
    username = request.data["username"]
    user_pin = request.data["PIN"]
    user = User.objects.get(username=username)

    account = Account.objects.get(user=user, PIN=user_pin)

    print("account balance: ", account.balance, "Withdraw: ", withdraw_amount)

    serializer = WithdrawSerializer(data=request.data)

    if serializer.is_valid() and (int(account.balance) > int(withdraw_amount)):
        withdraw = Withdraw.objects.create(account=account, amount=withdraw_amount)
        print("Withdrawal Amount" , withdraw)
        account.balance = serializer.debit(account.balance, withdraw.amount)
        account.save()
        withdraw.save()
        print("new balance" , account.balance)
        response_data = {
            'message': f"Withdraw of ${withdraw_amount} made successfully",
        }
        return Response(response_data, status=status.HTTP_201_CREATED)
    
    return Response({"message":"Invalid transaction. Not enough funds"})

@api_view(['POST'])
def quick_transfer(request):
    username = request.data["username"]
    PIN = request.data["PIN"]
    account_owner = Account.objects.get(user=User.objects.get(username=username), PIN=PIN)

    # Receiver clien details 
    account_name = request.data["account_name"]
    account_number = request.data["account_number"]
    amount = request.data["amount"]

    serializer = QuickTransferSerializer(data=request.data)

    if serializer.is_valid():
        transfer = QuickTransfer.objects.create(
           account=account_owner,
           account_name=account_name,
           account_number=account_number,
           amount=amount,
        )
        print(f"Transfer {transfer} made successfully")
        response_data = {
                'Transfer': f'Transfer of ${transfer.amount} made to {transfer.account_number} successfully',
            }
        return Response(response_data, status=status.HTTP_201_CREATED)
    return Response({'Error': 'Transfer Failed'})

# DEPOSIT HISTORY
@api_view(['POST'])
def deposit_history(request):
    username = request.data["username"]
    PIN = request.data["PIN"]
    print(colored(username, 'green'))
    print(colored(PIN, 'green'))

    account = Account.objects.get(user=User.objects.get(username=username), PIN=PIN)

    serializer = AccountSerializer(data=request.data)

    if serializer.is_valid():
       deposit_history = DepositSerializer(Deposit.objects.filter(account=account), many=True)
       response_data = {
                'history': deposit_history.data,
            }
       print(response_data)
       return Response(response_data, status=status.HTTP_200_OK)
    return Response({'Error': 'Unauthorized Access'})

# WITHDRAWAL HISTORY
@api_view(['POST'])
def withdraw_history(request):
    username = request.data["username"]
    PIN = request.data["PIN"]

    account = Account.objects.get(user=User.objects.get(username=username), PIN=PIN)

    serializer = AccountSerializer(data=request.data)

    if serializer.is_valid():
       withdraw_history = WithdrawSerializer(Withdraw.objects.filter(account=account), many=True)
       response_data = {
                'history': withdraw_history.data,
            }
       return Response(response_data, status=status.HTTP_200_OK)
    return Response({'Error': 'Unauthorized Access'})
    
# QUICK TRANSFER HISTORY
@api_view(['POST'])
def transfer_history(request):
    username = request.data["username"]
    PIN = request.data["PIN"]

    account = Account.objects.get(user=User.objects.get(username=username), PIN=PIN)

    serializer = AccountSerializer(data=request.data)

    if serializer.is_valid():
       withdraw_history = QuickTransferSerializer(QuickTransfer.objects.filter(account=account), many=True)
       response_data = {
                'history': withdraw_history.data,
            }
       return Response(response_data, status=status.HTTP_200_OK)
    return Response({'Error': 'Unauthorized Access'})

# No need now because we are using token authentication
@api_view(['POST'])
def logout_user(request):
    logout(request)
    return Response({"info": "Logged out successfully"}, status=status.HTTP_200_OK)

@api_view(['GET'])
def user(request):
    serializer = UserSerializer(data=request.user)
    print("current user is ", user)
    if serializer.is_valid():
        return Response({"user ": serializer.data})

    return Response({"Error":"User not Found"})

@api_view(['POST'])
def get_account_details(request):
    username = request.data["username"]
    PIN = request.data["PIN"]

    account = Account.objects.get(user=User.objects.get(username=username), PIN=PIN)

    serializer = AccountSerializer(data=request.data)

    if serializer.is_valid():
        response_data = {
            'username': account.user.username,
            'account_number': account.account_number,
            'balance': account.balance,
            'created': account.created,
            'email': account.user.email,
        }
        return Response({'details': response_data})
    return Response({'Error': 'Invalid credentials'})