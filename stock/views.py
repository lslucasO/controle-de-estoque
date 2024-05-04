from django.shortcuts import render

def home(request):
    return render(request, 'global/partials/home.html')