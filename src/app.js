import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes/index.js';
import database from './config/database.js';

const app = express();
const configureExpress = () => {
    app.use(bodyParser.json());
    app.use('/', routes); // toda requisição será administrada pelo routes
    app.database = database;    
    return app;
}

export default async() => {    
    const app = configureExpress();
    await app.database.connect();
    return app;
}