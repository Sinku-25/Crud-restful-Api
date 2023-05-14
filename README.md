# Crud restful Api

#  Crud API

The Crud-api project demonstrates the use of a Crud API with a user-friendly frontend.
The project is designed to be easily extendable and customizable. Here are some ideas for how you can use the project:

- Build your own Backend API and integrate it with the user-friendly Frontend
- Customize the user-friendly Frontend to fit your needs
- Use the project as a starting point for building your own web application

## Getting Started

To get started, follow these steps:

1. Clone the repository to your local machine:-

        git clone https://github.com/Sinku-25/Crud-restful-Api.git

2- install node_modulus using npm install node

3. Start the Docker containers:-

        docker-compose up

4. Wait a minute or so until the application starts up. Once it's ready, you can access it by visiting the following link in your web browser.

        http://localhost:3000/


# Front-end port:
To run the frontend part only
-cd frontend/

-node js/node.js

- URL: http://localhost:3000/
- running port: 3000

# Back-end port:
-cd Backend/

-npm start

- URL: http://localhost:5000/persons/        <- to get the persons
- running port: 5000
## Technologies Used
- Bootstrap -> Frontend
- Docker Compose 
- Node.js -> Front/Back
- Express.js -> Backend
- cors -> Backend



## Features

This project includes a Crud API with the following endpoints:

- GET /persons: Retrieve a list of all person objects.
- POST /persons: Create a new person object.
- PUT /persons/{id}:  Update a specific person object by its ID.
- DELETE /persons/{id}:  Delete a specific person object by its ID.
