from django.db import models

# Create your models here.

class Author(models.Model):
    first_name = models.TextField()
    last_name = models.TextField()

class Book(models.Model):
    name = models.TextField()
    isbn = models.TextField()
    author = models.ForeignKey(Author,  on_delete=models.PROTECT)

    def __str__(self):
        return self.name

  