# node-auth-api
User Authentication API
A simple backend API built with Node.js to handle user registration, login, and retrieval of all users. This API provides endpoints for registering new users, logging them in, and fetching all registered users. It uses JWT for authentication and MongoDB for data storage.

Features
User Registration: Register a new user with basic details.
User Login: Login with username/email and password.
Get All Users: Fetch all users in the system (admin access only).
JWT Authentication: Secure authentication using JSON Web Tokens (JWT).
Password Hashing: Passwords are securely hashed before storing them in the database.
Technologies Used
Node.js: Backend runtime environment.
Express.js: Web framework for Node.js.
MySQL: database to store user data.
JWT (JSON Web Token): For handling authentication.
bcryptjs: To hash and compare passwords securely.

Installation
Prerequisites
Node.js (v14 or above)
MySQL

Steps to Set Up
Clone the repository:

bash
Copy
git clone https://github.com/your-username/repository-name.git
cd repository-name
Install the dependencies:

bash
Copy
npm install
Create a .env file in the root of the project and add the following variables:

bash
Copy
MONGO_URI=mongodb://localhost:27017/your-database-name
JWT_SECRET=your_jwt_secret_key
Run the application:

bash
Copy
npm start
Your API should now be running at http://localhost:5000.

API Endpoints
1. Register a New User
Endpoint: POST /api/register
2. Login a User
Endpoint: POST /api/login
