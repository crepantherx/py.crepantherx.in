# example/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),   # Home page
    path('project/', views.project, name='project'),  # Project page
    path('mentorship/', views.mentorship, name='mentorship'),  # Project page
    path('contact/', views.contact, name='contact'), #Contact Page- Email
    path('process-form/', views.process_form, name='process_form'),
    path('create_order/', views.create_order, name='create_order'),
    path('verify_payment/', views.verify_payment, name='verify_payment'),
]