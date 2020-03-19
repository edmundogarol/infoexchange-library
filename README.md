# infoexchange-library
infoexchange Full-stack Developer Challenge

![infoexchange_library_home](https://fnblyg.bn.files.1drv.com/y4mbYrw4qii-SU6XycHL--lXETrZ4UPLO0etvR70g5Mzr7nAIO_ShQibzEzZ6ULdQH65Ul-1iR9ZgrsSnHea-6L_U6OM--9TeMW2WHITu4cRm2Mx8qjh2-CrR_u_iUWMIt6OOAxd3_nOA8EdqvNp4mYKeQJveFpNFNaVv4jFOKTCX8Ozu5DiUWIlixZQ4QW1_e4pw3mnN-ijdVHRhIYuFT3JA?width=300&height=500&cropmode=none) ![infoexchange_library_book_detail](https://e9blyg.bn.files.1drv.com/y4mo0Oq2q_Ku-5oSU61On1sA_qygcVQHth9c0GY6fHfc1qeUHAF2FwcHDNhwjpoktvrNAU9yeUu0vKcf_GAX8TXrzKsh0n-DKBF52DvOVN7_QKUl3Zdrrr0yeUQ7h_NrEwQlM0d8qUJKtyJ4z6l56r2JMMeCh-yj7wk4SPPaeQ47TAGtyFKsyMa6AxPcULdMmjuE61e-GQzYtLeQdM1nDP0Mg?width=300&height=500&cropmode=none) ![infoexchange_library_create_book](https://edblyg.bn.files.1drv.com/y4mIblQDW_vuF_5GI9IIKbKluOfzc53bK4NDYpYEaCfYeUD99fuND885KiSmuhPAPfqWAShm0jzLixbLMjOmmPkLzx_dbxnC88SDL5WkEXmid6G7NkMN0VSe9cIgNmH5SicTZJ2AhMvlXz6cJh8XHDp4ZSSMj2YX2UjeDh02Rt7n5MjYPsXbLVhc5KDrtzO7w2LsPE-NXjQ6jcKN0vXUWygdA?width=300&height=500&cropmode=none)

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

