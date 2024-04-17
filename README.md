# Firestore Express API
This project uses an Express.js server to interact with a Firestore database, providing RESTful API endpoints for basic CRUD operations on user data.

## Prerequisites
Node.js installed on your machine
Firebase project with Firestore enabled
Service account key JSON file for Firebase Admin SDK (key.json)
## Setup
Clone this repository to your local machine.
Navigate to the project directory.
Install dependencies using npm install.
Place your Firebase service account key JSON file (key.json) in the root directory.
## Configuration
Ensure that your Firestore rules allow read and write access to the users collection.

## Example Firestore rules:
plaintext
Copy code
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if true;
    }
  }
}
## Running the Server
Run the server using the following command:
npm start
The server will start running on port 8080 by default. You can specify a different port using the PORT environment variable.

## Endpoints
- POST /create: Creates a new user in the Firestore database.
- Request Body:
{
  "email": "user@example.com",
  "fireName": "John",
  "lastName": "Doe"
}
GET /read/all: Retrieves all users from the Firestore database.
GET /read/:id: Retrieves a specific user by their ID from the Firestore database.
POST /update: Updates a user's data in the Firestore database.
- Request Body:
{
  "email": "user@example.com"
}
- DELETE /delete/:id: Deletes a user from the Firestore database by their ID.
