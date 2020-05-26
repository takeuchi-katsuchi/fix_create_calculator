from django.urls import path

from . import views

urlpatterns = [
    path('add', views.calculator_add),
    path('subtraction', views.calculator_subtraction),
    path('division', views.calculator_division),
    path('multiplication', views.calculator_multiplication)
]