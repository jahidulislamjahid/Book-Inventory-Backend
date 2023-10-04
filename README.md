# Welcome to the Book Inventory

### [Live Link:](https://book-inventory-backend.vercel.app/)

### Application Routes:

#### User

- [api/v1/auth/signup](https://book-inventory-backend.vercel.app/api/v1/auth/signup) (POST)
- [api/v1/auth/signin](https://book-inventory-backend.vercel.app/api/v1/auth/signin) (POST)
- [api/v1/users](https://book-inventory-backend.vercel.app/api/v1/users) (GET)
- [api/v1/users/9b4cdc01-5d3a-4764-83e1-5f9af5f7bc9e](https://book-inventory-backend.vercel.app/api/v1/users/9b4cdc01-5d3a-4764-83e1-5f9af5f7bc9e) (Single GET) Include an id that is saved in your database
- [api/v1/users/9b4cdc01-5d3a-4764-83e1-5f9af5f7bc9e](https://book-inventory-backend.vercel.app/api/v1/users/9b4cdc01-5d3a-4764-83e1-5f9af5f7bc9e) (PATCH)
- [api/v1/users/9b4cdc01-5d3a-4764-83e1-5f9af5f7bc9e](https://book-inventory-backend.vercel.app/api/v1/users/9b4cdc01-5d3a-4764-83e1-5f9af5f7bc9e) (DELETE) Include an id that is saved in your database
- [api/v1/profile](https://book-inventory-backend.vercel.app/) (GET)

### Category

- [api/v1/categories/create-category](https://book-inventory-backend.vercel.app/api/v1/categories/create-category) (POST)
- [api/v1/categories](https://book-inventory-backend.vercel.app/api/v1/categories) (GET)
- [api/v1/categories/3d002934-aaf2-4da6-85db-8e2b8854913b](https://book-inventory-backend.vercel.app/api/v1/categories/3d002934-aaf2-4da6-85db-8e2b8854913b) (Single GET) Include an id that is saved in your database
- [api/v1/categories/3d002934-aaf2-4da6-85db-8e2b8854913b](https://book-inventory-backend.vercel.app/api/v1/categories/3d002934-aaf2-4da6-85db-8e2b8854913b) (PATCH)
- [api/v1/categories/3d002934-aaf2-4da6-85db-8e2b8854913b](https://book-inventory-backend.vercel.app/api/v1/categories/3d002934-aaf2-4da6-85db-8e2b8854913b) (DELETE) Include an id that is saved in your database

### Books

- [api/v1/books/create-book](https://book-inventory-backend.vercel.app/api/v1/books/create-book) (POST)
- [api/v1/books](https://book-inventory-backend.vercel.app/api/v1/books) (GET)
- [api/v1/books/3d002934-aaf2-4da6-85db-8e2b8854913b/category](https://book-inventory-backend.vercel.app/api/v1/books/3d002934-aaf2-4da6-85db-8e2b8854913b/category) (GET)
- [api/v1/books/19f679e3-22e3-4f38-9263-ee31e3175d30](https://book-inventory-backend.vercel.app/api/v1/books/19f679e3-22e3-4f38-9263-ee31e3175d30) (GET)
- [api/v1/books/19f679e3-22e3-4f38-9263-ee31e3175d30](https://book-inventory-backend.vercel.app/api/v1/books/19f679e3-22e3-4f38-9263-ee31e3175d30) (PATCH)
- [api/v1/books/19f679e3-22e3-4f38-9263-ee31e3175d30](https://book-inventory-backend.vercel.app/api/v1/books/19f679e3-22e3-4f38-9263-ee31e3175d30) (DELETE)

### Orders

- [api/v1/orders/create-order](https://book-inventory-backend.vercel.app/api/v1/orders/create-order) (POST)
- [api/v1/orders](https://book-inventory-backend.vercel.app/api/v1/orders) (GET)
- [api/v1/orders/3e07b0a9-c3a4-4f8b-be2c-8ad59c4d09bf](https://book-inventory-backend.vercel.app/api/v1/orders/3e07b0a9-c3a4-4f8b-be2c-8ad59c4d09bf) (GET)
