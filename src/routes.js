import { Router } from 'express';

import authMiddleware from './app/middlewares/auth';

import SessionController from './app/controllers/SessionController';
import ServerController from './app/controllers/ServerController';
import BinanceAccountInfoController from './app/controllers/BinanceAccountInfoController';

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'hello world!' });
});

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

// Binance Account Info
routes.get('/binanceaccountinfo', BinanceAccountInfoController.index);

// Servidor
routes.get('/verifyserver', ServerController.verifyStatus);
routes.get('/startserver', ServerController.start);
routes.get('/stopserver', ServerController.stop);

export default routes;
