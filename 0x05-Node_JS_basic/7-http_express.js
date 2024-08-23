const express = require('express');

const args = process.argv.slice(2);
const countStudents = require('./3-read_file_async');

const databasePath = args[0];

const app = express();
const portNumber = 1245;

app.get('/', (request, response) => {
  response.send('Hello Holberton School!');
});

app.get('/students', async (request, response) => {
  const introMessage = 'This is the list of our students\n';
  try {
    const studentsList = await countStudents(databasePath);
    response.end(`${introMessage}${studentsList.join('\n')}`);
  } catch (error) {
    response.send(`${introMessage}${error.message}`);
  }
});

app.listen(portNumber, () => {
  console.log(`Express Server running at http://localhost:${portNumber}/`);
});

module.exports = app;
