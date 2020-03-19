"""infoexchangelibrary URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, re_path, include
from rest_framework import routers
from .infoexchangelibrary.views import ListBooksView, ListAuthorsView, AuthorView, BookView

router = routers.DefaultRouter()
router.register(r'api/books', ListBooksView)
router.register(r'api/authors', ListAuthorsView)
router.register(r'api/author', AuthorView, basename='author')
router.register(r'api/book', BookView, basename='book')

urlpatterns = [
    path('', include('frontend.urls')),
    path('add/', include('frontend.urls')),
    path('book/<id>/', include('frontend.urls')),
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]