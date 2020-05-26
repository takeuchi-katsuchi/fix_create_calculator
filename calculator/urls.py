# from django.contrib import admin
from django.conf.urls import url
from django.urls import path, include
from django.views.generic import RedirectView

urlpatterns = [
    # path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
    url('', RedirectView.as_view(url='/test/index.html')),
]
