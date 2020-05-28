# from django.contrib import admin
from django.conf.urls import url
from django.urls import path, include
from django.views.generic import RedirectView

urlpatterns = [
    path('api/', include('api.urls')),
    path('oneapi', include('oneapi.urls')),
    url('', RedirectView.as_view(url='/front/index.html')),
]
