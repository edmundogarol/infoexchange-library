from rest_framework import generics
from rest_framework.mixins import (
    CreateModelMixin, ListModelMixin, RetrieveModelMixin, UpdateModelMixin
)
from rest_framework import viewsets
from rest_framework.response import Response
from .models import Book, Author
from .serializers import BookSerializer, AuthorSerializer
from django.shortcuts import get_object_or_404

class ListBooksView(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Book.objects.all()
    serializer_class = BookSerializer

class AuthorView(UpdateModelMixin, viewsets.ViewSet):  # handles PUTs and PATCHes

    def retrieve(self,request,pk=None):
        queryset = Author.objects.all()
        author = get_object_or_404(queryset, pk=pk)
        serializer = AuthorSerializer(author)
        return Response(serializer.data)

    def partial_update(self, request, *args, **kwargs):
        queryset = Book.objects.all()
        book = queryset.get(pk=kwargs.get('pk'))
        serializer_class = BookSerializer
        serializer = BookSerializer(book, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

class BookView(UpdateModelMixin, viewsets.ViewSet):  # handles PUTs and PATCHes

    def retrieve(self,request,pk=None):
        queryset = Book.objects.all()
        book = get_object_or_404(queryset, pk=pk)
        serializer = BookSerializer(book)
        return Response(serializer.data)

    def partial_update(self, request, *args, **kwargs):
        queryset = Book.objects.all()
        book = queryset.get(pk=kwargs.get('pk'))
        serializer_class = BookSerializer
        serializer = BookSerializer(book, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

class ListAuthorsView(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer
