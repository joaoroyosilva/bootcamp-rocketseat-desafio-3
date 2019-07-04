import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import auth from './app/middlewares/auth';

const routes = new Router();

routes.get('/', (req, res) => res.json({ message: 'Hello world' }));
routes.post('/users', UserController.store);
routes.put('/users', auth, UserController.update);
routes.post('/sessions', SessionController.store);

export default routes;
