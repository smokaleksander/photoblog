from django.urls import path
from . import views

urlpatterns = [
    path('kontakt', views.contact, name='contact')
]
