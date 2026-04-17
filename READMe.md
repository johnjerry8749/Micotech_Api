# Micotech Backend API
this is a backend API built with Node.js, Express, and PostgreSQL. It handles user authentication, posts, and basic social features like liking posts. JWT is used for protecting routes.

The project is structured to be simple, scalable, and easy to extend into a full social media backend.

---

## Tech Stack

- Node.js (ES Modules)
- Express.js
- PostgreSQL (pg)


---

## Features

- User registration and login
- JWT authentication
- Create and fetch posts
- Like and unlike posts
- Filter posts by location
- Pagination support
- Basic error handling
- Rate limiting

---

## Project Structure

backend/
config/
controllers/
middleware/
routes/
services/
utils/
server.js

---
## Setup Instructions
## Setup Instructions
## Setup Instructions
## Setup Instructions

### Clone the project

git clone <repo-url>
cd backend

---



### Go to SQL folder upload the database to cloud hosting
### Create .env file and setup database connection 
DB_HOST=localhost
DB_USER=databse user
DB_PASSWORD=database password
DB_NAME=your database name
DB_PORT=28019
DATABASE_URL=your_postgres_connection_string
JWT_SECRET=your_secret_key

---
### Install dependencies
npm install


---
### Run the server
Development:
npm run dev

Production:
npm start
nodemon

---
## Base URL

http://localhost:5000/api

---

## Authentication

For protected routes, add this header:

Authorization: Bearer <token>

---

## API Endpoints

### Register User
POST /api/auth/register
example
{
  "username": "john",
  "email": "john@gmail.com",
  "password": "123456"
}

---

### Login User
POST /api/auth/login

{
  "email": "john@gmail.com",
  "password": "123456"
}

Response:

{
  "token": "your_jwt_token"
}

copy the toekn to your bearing if you are testing on postman
---

### Create Post
POST /api/posts
 //send this bbody request 
Body:
{
  "content": "Hello world",
  "location": "Nigeria"
}


---
### Get Posts
GET /api/posts
---
### Get Posts by Location
GET /api/posts?location=Lekki&page=1&limit=10
GET /api/posts?location=Yaba&page=1&limit=10
GET /api/posts?location=Nigeria&page=1&limit=10

---

### Like / Unlike Post
PATCH /api/posts/:id/like

all Posts ID for Testing like 
Replace the :id with one of this 
for example;
PATCH /api/posts/f0bec15d-12aa-4cc8-a588-e3566a17528d/like

1. f0bec15d-12aa-4cc8-a588-e3566a17528d
2. e1e16af9-19d3-48ad-9cc6-92f35e4d57b6
3. 07a26d6c-38f0-4020-80ac-1abc94db7abc
4. cfcf0888-ab55-402b-bfbb-5c558621b937
5. a7c2beac-49b4-4900-8381-72ce54545683



## Notes
- Make sure JWT_SECRET is set correctly
---

## Author
Nwadike Chukwuemeka

---
## License
NC