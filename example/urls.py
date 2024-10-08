# example/urls.py
from django.urls import path

from example.views import index, project
from . import views


urlpatterns = [
    path('', index),
    path('project/', project)
]