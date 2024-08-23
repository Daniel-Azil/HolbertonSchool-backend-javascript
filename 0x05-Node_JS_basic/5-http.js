const http = require('http');

const dbArgs = process.argv.slice(2);
const countStudents = require('./3-read_file_async');

const dbFilePath = dbArgs[0];

const serverHost = '127.0.0.1';
const serverPort = 1245;

const app = http.createServer(async (request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');

  const { url } = request;

  if (url === '/') {
    response.write('Hello Holberton School!');
  } else if (url === '/students') {
    response.write('This is the list of our students\n');
    try {
      const studentData = await countStudents(dbFilePath);
      response.end(`${studentData.join('\n')}`);
    } catch (error) {
      response.end(error.message);
    }
  } else {
    response.statusCode = 404;
    response.end();
  }
});

app.listen(serverPort, serverHost, () => {
  console.log(`Server running at http://${serverHost}:${serverPort}/`);
});

module.exports = app;
