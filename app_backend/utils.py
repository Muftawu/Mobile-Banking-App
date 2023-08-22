import random
from termcolor import colored 
# account login 
{
    "username": "Abel",
    "email": "abel@gmail.com",
    "password": "afsdljiejn"
}

# account register 
{
    "username": "Abel",
    "email": "abel@gmail.com",
    "PIN": "00000",
    "password": "jneijhnisod"
}

# account deposit 
{
    "username": "Abel",
    "amount": "100",
    "PIN": "0012103"
}

# account withdraw 
{
    "username": "Abel",
    "amount": "100",
    "PIN": "0012103"
}

# account register 
{
    "username": "Abel",
    "amount": "200",
    "account_number": "20145212036",
    "account_name": "Musah Adams",
    "PIN": "2023"
}

# view transaction history
{
    "username": "Abel",
    "PIN": "2023"
}

def generate_account_number(acc_no_len):
    acc_no = ""
    for i in range(acc_no_len):
        acc_no += str(random.randint(1, 9))
    return acc_no

if __name__ == "__main__":
    print(colored(generate_account_number(15), "green"))