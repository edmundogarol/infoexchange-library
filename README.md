# infoexchange-library
infoexchange Full-stack Developer Challenge

![infoexchange_library_home](https://fnblyg.bn.files.1drv.com/y4mbYrw4qii-SU6XycHL--lXETrZ4UPLO0etvR70g5Mzr7nAIO_ShQibzEzZ6ULdQH65Ul-1iR9ZgrsSnHea-6L_U6OM--9TeMW2WHITu4cRm2Mx8qjh2-CrR_u_iUWMIt6OOAxd3_nOA8EdqvNp4mYKeQJveFpNFNaVv4jFOKTCX8Ozu5DiUWIlixZQ4QW1_e4pw3mnN-ijdVHRhIYuFT3JA?width=542&height=690&cropmode=none)

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

