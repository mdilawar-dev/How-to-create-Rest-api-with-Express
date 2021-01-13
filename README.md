# How-to-create-Rest-api-with-Express
 REST API with  node.j ,Express 
The REST API server will have the following four endpoints:

    GET /accounts to retrieve a list of accounts
    POST /accounts to create a new account
    PUT /accounts to update an account
    DELETE /accounts to remove an account

Each endpoint is a server route, i.e., clients can make HTTP requests and the server will respond.
Install the three packages which will be your project dependencies:

npm i express morgan errorhandler -E
Lunch the server with node server.js in Terminal / Command Prompt from the project root.
Use Postman, CURL or any other HTTP request agent to test your server.

 The data will be stored in the memory of the server instead of a database.