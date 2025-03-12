# User Authentication API

A simple backend API built with Node.js to handle user registration, login, and retrieval of all users. This API provides endpoints for registering new users, logging them in, and fetching all registered users. It uses JWT for authentication and MySQL for data storage.

## Features

- **User Registration**: Register a new user with basic details.
- **User Login**: Login with username/email and password.
- **Get All Users**: Fetch all users in the system .
- **JWT Authentication**: Secure authentication using JSON Web Tokens (JWT).
- **Password Hashing**: Passwords are securely hashed before storing them in the database.

## Technologies Used

- **Node.js**: Backend runtime environment.
- **Express.js**: Web framework for Node.js.
- **MySQL**: Database to store user data.
- **JWT (JSON Web Token)**: For handling authentication.
- **bcryptjs**: To hash and compare passwords securely.

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or above)
- [MySQL](https://www.mysql.com/)

### Steps to Set Up

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/repository-name.git
    cd repository-name
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root of the project and add the following variables:
    ```bash
    DB_HOST=localhost
    DB_USER=your_username
    DB_PASSWORD=your_password
    DB_NAME=database_name
    JWT_SECRET=your_jwt_secret_key
    ```

4. Run the application:
    ```bash
    npm start
    ```

5. Your API should now be running at `http://localhost:5000`.

## API Endpoints

### 1. Register a New User

- **Endpoint**: `POST /api/register`
- **Request Body**:
    ```json
    {
      "password": "yourpassword",
      "username": "username"
    }
    ```
- **Response**:
    ```json
    {
      "message": "User registered successfully"
    }
    ```

### 2. Login a User

- **Endpoint**: `POST /api/login`
- **Request Body**:
    ```json
    {
      "email": "user@example.com",
      "password": "yourpassword"
    }
    ```
- **Response**:
    ```json
    {
      "token": "your-jwt-token"
    }
    ```
### 2. Get all User Details

- **Endpoint**: `POST /api/get`
- **Response**:
    ```json
    {
      "userid":  100,
      "username": "abc",
      "password": "password",
    }
    ```
