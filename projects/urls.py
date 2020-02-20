from django.urls import path
from . import views

urlpatterns = [
    path('projekty', views.projects, name='projects')
]
