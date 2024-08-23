const express = require('express');

const app = express();
const serverPort = 7865;

app.get('/', (request, response) => {
  response.send('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+)', (request, response) => {
    response.send(`Payment methods for cart ${request.params.id}`);
});

app.listen(serverPort, () => {
    console.log(`API available on localhost port ${serverPort}`);
});

module.exports = app;
