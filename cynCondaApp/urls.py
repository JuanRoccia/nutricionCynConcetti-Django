from django.urls import path
from . import views

urlpatterns = [
    path('', views.myview),
    path('cynCondaApp/contact/', views.contact, name='contact'),
]