
from rest_framework import serializers
from .models import Author, Book


class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ("name", "author", "isbn", "pk")

class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = ("first_name", "last_name", "pk")