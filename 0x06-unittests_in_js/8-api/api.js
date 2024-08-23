const express = require('express');

const app = express();
const newPort = 7865;

app.get('/', (request, response) => {
  response.send('Welcome to the payment system');
});

app.listen(newPort, () => {
    console.log("API available on localhost port " + newPort);
});

module.exports = app;
