import express from 'express';
import indexController from './controllers/index';

const routes = express.Router();

routes.all('/', indexController);

export default routes;
