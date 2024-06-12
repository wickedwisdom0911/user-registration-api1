User Registration API with JWT
This repository contains a RESTful API built with Express.js and MongoDB for user registration. It provides endpoints for user authentication, registration, and file uploads, secured using JSON Web Tokens (JWT).

Features
User registration with mobile number and password
Authentication using JWT
Endpoint for fetching user details
File upload functionality for user profile images
Secure password hashing using bcrypt
Getting Started
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/user-registration-api.git
Install dependencies:

bash
Copy code
cd user-registration-api
npm install
Set up environment variables:

Create a .env file in the root directory and add the following variables:

plaintext
Copy code
PORT=3000
MONGO_URI=your-mongodb-uri
JWT_SECRET=your-jwt-secret
Start the server:

bash
Copy code
npm start
API Endpoints
POST /api/users/register: Register a new user.
POST /api/users/login: Login and receive a JWT token.
GET /api/users/me: Get user details (requires authentication).
POST /api/users/upload: Upload a user profile image (requires authentication).
For detailed API documentation and examples, refer to the API documentation.

Technologies Used
Node.js
Express.js
MongoDB
JSON Web Tokens (JWT)
Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your improvements.
