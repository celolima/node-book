import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes/index.js'; // procura por index.js automaticamente

const app = express();
app.use(bodyParser.json());
app.use('/', routes); // toda requisição será administrada pelo routes

export default app;