# infoexchange-library
infoexchange Full-stack Developer Challenge

Deployment (Mac)

On root directory:
 
  `make library`

InfoExchange Library

  `http://127.0.0.1:8000/`

Backend API (Django REST Framework)

  `GET /api/books/` - Returns a list of books in the database in JSON format

  `GET /api/book/{{id}}/` - Returns a detail view of the specified book id. Nest author details in JSON format

  `GET /api/authors/` - Returns a list of authors in the database in JSON format

  `GET /api/author/{{id}}/` - Returns a detail view of the specified author id

  `PATCH /author/{{id}}/` - Updates an existing author - Expects a JSON body
  
  `PATCH /book/{{id}}/` - Updates an existing book - Expects a JSON body

