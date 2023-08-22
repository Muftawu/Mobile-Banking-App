from django.db import models
from random import randint 
from django.contrib.auth.models import User 
from utils import generate_account_number

class Account(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True, blank=True)
    balance = models.IntegerField(null=True, blank=True)
    PIN = models.IntegerField(null=True, blank=True, default=12345)
    created = models.DateTimeField(auto_now_add=True)
    account_number = models.CharField(max_length=100, null=True, blank=True)
    
    def save(self, *args, **kwargs):
        if not self.balance:
            self.balance = 0.00

        if not self.account_number:
            self.account_number = generate_account_number(15)
        super().save(*args, **kwargs)
    
    def __str__(self):
        return self.user.username 


class Deposit(models.Model):
    account = models.ForeignKey(Account, on_delete=models.CASCADE, null=True, blank=True)
    amount = models.IntegerField(null=True, blank=True, default=0)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Deposit - ${self.amount} - {self.account}' 

class Withdraw(models.Model):
    account = models.ForeignKey(Account, on_delete=models.CASCADE, null=True, default=0)
    amount = models.IntegerField(null=True, blank=True, default=0)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Withdraw - ${self.amount}-{self.account}'
    
class QuickTransfer(models.Model):
    account = models.ForeignKey(Account, on_delete=models.CASCADE, null=True, default=0)
    account_number = models.CharField(max_length=100, default='203201457201')
    account_name = models.CharField(max_length=100, default='Anonymous Account')
    amount = models.IntegerField(null=True, blank=True, default=0)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Transfer - ${self.amount}-{self.account_number}-{self.account_name}'
    
class Transactions(models.Model):
    deposits = models.ForeignKey(Deposit, on_delete=models.CASCADE)
    withdraw = models.ForeignKey(Withdraw, on_delete=models.CASCADE)
    deposits = models.ForeignKey(Deposit, on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural = 'Transactions'

    # def __str__(self):
    #     return self.deposits

