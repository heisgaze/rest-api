# 🛍️ CRUD API

Simple RESTful API to manage products using Node.js, Express, and MongoDB.

---

## Base URL
http://localhost:3000/api/products

---

## 🔐 Authentication
No Authentication required (public API)

---

## 💿 Connect to database
Make file .env and put your string connection fo database
`
PORT=3000
MONGODB=<your string connection>
`

---

## 📦 Endpoints

### 🔍 Get all products
- **URL:** `/api/products`
- **Methods:** `GET`
- **Response:** 
`Json
[
    {
        "_id": "ID",
        "name": "name your product",
        "quantity": number,
        "price": number,
        "createdAt": "date created",
        "updatedAt": "update created",
        "__v": 0
    } 
]`

### 🔍 Get product by Id/single product
- **URL:** `/api/products/:id`
- **Methods:** `GET`
- **Response:** 
`Json
[
    {
        "_id": "ID",
        "name": "name your product",
        "quantity": number,
        "price": number,
        "createdAt": "date created",
        "updatedAt": "update created",
        "__v": 0
    }
]`
- **Success Response:** `200 Success`
- **Error Response:** `404 Not Found`

### ➕ Create Product
- **URL:** `/api/products`
- **Methods:** `POST`
- **Input:** 
`Json
[
    {
        "name": "name your product",
        "quantity": number,
        "price": number,
    }
]`
- **Success Response:** 
`
[
    {
        "_id": "ID",
        "name": "name your product",
        "quantity": number,
        "price": number,
        "createdAt": "date created",
        "updatedAt": "update created",
        "__v": 0
    }
]`

### ✏️ Update Product
- **URL:** `/api/products/:id`
- **Methods:** `PUT`
- **Input:** 
`
{
  "price": 175000
}
`
- **Success Response:** `200 OK`

### 🗑️ Delete Product
- **URL:** `/api/products/:id`
- **Methods:** `DELETE`
- **Success Response:** `delete succesfully`

