# example/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),   # Home page
    path('project/', views.project, name='project'),  # Project page
    path('contact/', views.contact, name='contact'), #Contact Page- Email

]