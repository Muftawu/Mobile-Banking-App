python manage.py makemigrations backend
python manage.py migrate

set ip="10.76.29.151"
@REM python manage.py createsuperuser --username Muftawu --email muftawu@gmail.com

@REM start chrome --new-tab http://%ip%:8000/bank/deposit 
@REM start msedge --new-tab http://%ip%:8000/admin
python manage.py runserver %ip%:8000

