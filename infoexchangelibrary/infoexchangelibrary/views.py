from rest_framework import generics
from rest_framework import viewsets
from .models import Book, Author
from .serializers import BookSerializer, AuthorSerializer


class ListBooksView(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Book.objects.all()
    serializer_class = BookSerializer

class ListAuthorsView(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer
