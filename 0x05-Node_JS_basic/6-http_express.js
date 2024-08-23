const express = require('express');

const app = express();
const portNumber = 1245;

app.get('/', (request, response) => {
  response.send('Hello Holberton School!');
});

app.listen(portNumber, () => {
  console.log(`Express app listening at http://localhost:${portNumber}/`);
});

module.exports = app;
