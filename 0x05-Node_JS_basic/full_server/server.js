import express from 'express';
import setupRoutes from './routes/index';

const app = express();
const serverPort = 1245;

setupRoutes(app);

app.listen(serverPort, () => {
  console.log(`Express Server app listening at http://localhost:${serverPort}`);
});

module.exports = app;
