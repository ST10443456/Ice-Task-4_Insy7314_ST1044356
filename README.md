# Ice-Task-4_Insy7314_ST1044356
# Apply Security Headers

## Student Number
ST10443456

## Description

This project demonstrates how HTTP security headers can be applied to a Node.js and Express API using Helmet.

Helmet middleware is used to improve the security of the API by setting HTTP response headers.

## Technologies Used

- Node.js
- Express.js
- Helmet
- Postman

## Security Implementation

Helmet was installed using:

    npm install helmet

Helmet middleware was then applied to the Express application:

    app.use(helmet());

A Content Security Policy (CSP) was also configured to restrict resources to the same origin.

## Security Headers

The API response includes security headers such as:

- Content-Security-Policy
- X-Content-Type-Options
- Strict-Transport-Security
- X-Frame-Options
- Referrer-Policy
- Cross-Origin-Opener-Policy
- Cross-Origin-Resource-Policy

## Running the Application

Install the dependencies:

    npm install

Start the server:

    node index.js

The API runs on:

    http://localhost:3000/

## Testing

The API was tested using Postman.

A GET request was sent to:

    http://localhost:3000/

The request returned a `200 OK` response.

The response headers were inspected in Postman to confirm the presence of:

    Content-Security-Policy
    X-Content-Type-Options

This confirms that Helmet security headers are being applied successfully.