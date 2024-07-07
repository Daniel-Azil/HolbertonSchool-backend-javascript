# Holberton School Backend JavaScript

This repository contains various projects and exercises focused on JavaScript, ES6, Node.js, TypeScript, and unit testing. These tasks are part of the Holberton School curriculum and aim to strengthen your backend development skills in JavaScript and related technologies.

## Directory Structure

Here’s an overview of the directory structure in this repository:

### 1. `0x00-ES6_basic`
This directory includes basic exercises covering JavaScript ES6 features like `const`, `let`, template literals, arrow functions, and default parameters.
- **Files**:
  - 0-constants.js
  - 1-block-scoped.js
  - 2-arrow.js
  - 3-default-parameter.js
  - 4-rest-parameter.js
  - 5-spread-operator.js
  - 6-string-interpolation.js
  - 7-getBudgetObject.js
  - 8-getBudgetCurrentYear.js
  - 9-getFullBudget.js
  - package.json

### 2. `0x01-ES6_promise`
This folder introduces Promises in JavaScript and includes tasks related to promise chaining, error handling, and asynchronous execution with `async` and `await`.
- **Files**:
  - 0-promise.js
  - 1-promise.js
  - 2-then.js
  - 3-all.js
  - 5-photo-reject.js
  - 7-load_balancer.js
  - 9-try.js
  - 100-await.js
  - 4-user-promise.js
  - 6-final-user.js
  - 8-try.js
  - utils.js

### 3. `0x02-ES6_classes`
This directory focuses on ES6 Classes, including class creation, inheritance, and methods. It also covers how to use classes for various problem-solving scenarios.
- **Files**:
  - 0-classroom.js
  - 1-make_classrooms.js
  - 2-hbtn_course.js
  - 3-currency.js
  - 4-pricing.js
  - 5-building.js
  - 6-sky_high.js
  - 7-airport.js
  - 8-hbtn_class.js

### 4. `0x03-ES6_data_manipulation`
Contains exercises on manipulating data structures such as lists, sets, and objects using modern ES6 features. Tasks include sorting, filtering, and updating collections.
- **Files**:
  - 0-get_list_students.js
  - 1-get_list_student_ids.js
  - 2-get_students_by_loc.js
  - 3-get_ids_sum.js
  - 4-update_grade_by_city.js
  - 5-typed_arrays.js
  - 6-set.js
  - 7-has_array_values.js
  - 8-clean_set.js
  - 9-groceries_list.js

### 5. `0x04-TypeScript`
Contains TypeScript exercises. These tasks explore the core features of TypeScript, including typing, interfaces, and classes.
- **Files**:
  - README.md
  - task_0
  - task_1
  - task_2
  - task_3
  - task_4
  - task_5

### 6. `0x05-Node_JS_basic`
Tasks related to Node.js, including working with modules, the filesystem, HTTP requests, and building a basic web server.
- **Files**:
  - 0-console.js
  - 1-stdin.js
  - 2-read_file.js
  - 3-read_file_async.js
  - 4-http.js
  - 5-http.js
  - 6-http_express.js
  - 7-http_express.js
  - full_server
  - database.csv
  - package.json

### 7. `0x06-unittests_in_js`
Contains exercises on unit testing with JavaScript, using testing frameworks like Mocha, Chai, and other tools to write and run tests for various functionalities.
- **Files**:
  - 0-calcul.js
  - 1-calcul.js
  - 2-calcul_chai.js
  - 3-payment.js
  - 4-payment.js
  - 5-payment.test.js
  - 6-payment_token.js
  - 7-skip.test.js
  - 8-api
  - 9-api
  - package.json

## Setup

### Prerequisites
Before running the code, ensure you have the following installed:
- **Node.js** (for JavaScript exercises)
- **npm** (for package management)
- **TypeScript** (for TypeScript exercises)
- **Mocha and Chai** (for testing JavaScript code)

### Installation

Clone the repository and navigate into the respective directory:
```bash
git clone https://github.com/username/HolbertonSchool-backend-javascript.git
cd HolbertonSchool-backend-javascript
```

For dependencies related to each task, install them using npm:

```bash
npm install
```

### Running the Code

To run an individual JavaScript or TypeScript task, execute it with Node.js:

```bash
node <filename>.js
```


For TypeScript files, you may need to compile them first, or run them directly if using ts-node:

```bash
npx ts-node <filename>.ts
```

### Running Unit Tests

To run the unit tests using Mocha:

```bash
mocha <test-file>.test.js
```

Make sure your test files are placed in the appropriate test directories (e.g., 0x06-unittests_in_js).

### TypeScript Compilation (Optional)
If you need to compile TypeScript files manually, use the TypeScript compiler:

```bash
tsc <filename>.ts
```
Then run the compiled JavaScript file:

```bash
node <filename>.js
```

### Key Changes
- Added a note for running TypeScript files with ts-node for convenience.
- Included a section about TypeScript compilation if manual compilation is preferred.






