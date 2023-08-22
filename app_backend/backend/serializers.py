from rest_framework.decorators import api_view
from rest_framework.serializers import ModelSerializer
from . models import Withdraw, Deposit, User, Account, QuickTransfer

class DepositSerializer(ModelSerializer):
    class Meta:
        model = Deposit
        fields = '__all__'

    def credit(self, old, new):
        return int(old) + int(new)

class WithdrawSerializer(ModelSerializer):
    class Meta:
        model = Withdraw
        fields ='__all__'
    
    def debit(self, old, new):
        return int(old) - int(new)

class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ("username", )

class AccountSerializer(ModelSerializer):
    class Meta:
        model = Account
        fields = ("user", )

class QuickTransferSerializer(ModelSerializer):
    class Meta:
        model = QuickTransfer
        fields = '__all__'