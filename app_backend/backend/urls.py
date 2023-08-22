from django.urls import path 
from . import views 


urlpatterns = [ 
    path('login/', views.login_user, name='login'),
    path('register/', views.register, name='register'),
    path('deposit/', views.deposit, name='deposit'),
    path('transfer/', views.quick_transfer, name='deposit'),
    path('withdraw/', views.withdraw, name='withdraw'),
    path('user/', views.user, name='user'),
    path('logout/', views.logout_user, name='logout'),
    path('deposit_history/', views.deposit_history, name='deposit_history'),
    path('withdraw_history/', views.withdraw_history, name='withdraw_history'),
    path('transfer_history/', views.transfer_history, name='transfer_history'),
    path('get_account_details/', views.get_account_details, name="get_account_details"),
]