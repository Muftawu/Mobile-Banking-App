from django.contrib import admin
from .models import Withdraw, Deposit, Account, QuickTransfer, Transactions

admin.site.register(Withdraw)
admin.site.register(Deposit)
admin.site.register(Account)
admin.site.register(QuickTransfer)
admin.site.register(Transactions)
