from django.contrib import admin
from django.urls import path, include
from . import views

app_name = 'stock'

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', view=views.home, name='home')
]
