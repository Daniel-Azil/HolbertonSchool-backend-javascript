# NodeJS Basics

## Overview
Welcome to the NodeJS Basics project! This repository is designed to get you hands-on experience with Node.js and Express by building various applications and servers. You'll be working with file handling, HTTP servers, and Express to create a small-scale web application.

## Setup Instructions
Before diving into the tasks, ensure you have Node.js installed on your machine. If not, download it from the [Node.js official website](https://nodejs.org/).

To get started, clone this repository and install the necessary dependencies:

```sh
git clone [YOUR_REPOSITORY_URL]
cd [YOUR_PROJECT_DIRECTORY]
npm install
```
## Tasks Breakdown

1. Basic JavaScript Execution
   * **File**: `0-console.js`
   * **Objective**: Implement a function `displayMessage` that logs a specified string to the console.

2. Handling User Input via Command Line
   * **File**: `1-stdin.js`
   * **Objective**: Create an interactive script that prompts the user for their name, displays it, and handles program termination gracefully.

3. Synchronous File Reading
   * **File**: `2-read_file.js`
   * **Objective**: Develop a function `countStudents` to synchronously read a CSV file and process student data, handling errors if the file is missing.

4. Asynchronous File Reading
   * **File**: `3-read_file_async.js`
   * **Objective**: Modify `countStudents` to handle file reading asynchronously with promises. This function should also manage errors gracefully.

5. HTTP Server with Node.js
   * **File**: `4-http.js`
   * **Objective**: Build a simple HTTP server that always responds with "Hello Holberton School!" regardless of the URL path.

6. Enhanced HTTP Server with Node.js
   * **File**: `5-http.js`
   * **Objective**: Extend the HTTP server to handle two routes:
     * `/` to display "Hello Holberton School!"
     * `/students` to show a list of students by reading from a CSV file.

7. HTTP Server using Express
   * **File**: `6-http_express.js`
   * **Objective**: Use the Express framework to create a server with similar functionality as in `5-http.js`, but with Express routing.

8. Advanced Express Server Implementation
   * **File**: `7-http_express.js`
   * **Objective**: Develop an Express server with the following features:
     * Route `/` displaying "Hello Holberton School!"
     * Route `/students` showing a student list with dynamic content from a CSV file

9. Complete Express Server Structure
   * **Directory**: `full_server/`
   * **Objective**: Build a complete Express application with a well-organized structure. This involves:
     * Utility functions for reading the database
     * Controllers for handling different routes
     * Routes to manage application endpoints
     * A server setup to tie everything together

   Sub-Tasks:
   1. **Utility Functions**:
      * **File**: `full_server/utils.js`
      * **Objective**: Implement a function to read and parse student data from a CSV file.

   2. **App Controller**:
      * **File**: `full_server/controllers/AppController.js`
      * **Objective**: Create a controller to handle the homepage route.

   3. **Students Controller**:
      * **File**: `full_server/controllers/StudentsController.js`
      * **Objective**: Develop methods to fetch and display student data based on various criteria.

   4. **Routes Setup**:
      * **File**: `full_server/routes/index.js`
      * **Objective**: Define routes and link them to the appropriate controllers.

   5. **Server Configuration**:
      * **File**: `full_server/server.js`
      * **Objective**: Set up and configure the Express server, integrating all routes and controllers.

## Running the Application

To start the server, use the following command:

```sh
npm run dev
```

You can then test the server using curl or any HTTP client:
```sh
shCopycurl localhost:1245
curl localhost:1245/students
```
## Notes

- Ensure that your CSV file is properly formatted and accessible.
- Handle all potential errors and edge cases gracefully.
- Follow best practices for file handling and server setup.


This Markdown formatting:
- Uses proper headings (##) for main sections
- Utilizes code blocks with language specification (```sh) for shell commands
- Employs bullet points (*) for the notes section

This format will render nicely on GitHub, providing clear structure and syntax highlighting for the code snippets. CopyRetryClaude does not have the ability to run the code it generates yet.Claude can make mistakes. Please double-check responses.