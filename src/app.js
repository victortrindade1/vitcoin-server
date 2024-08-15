import 'dotenv/config';

import express from 'express';
import cors from 'cors';

import routes from './routes';
// import './database';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    // this.server.use(cors({ origin: 'https://meuservidor.com.br' }));

    // comentario a toa

    // this.server.use((req, res, next) => {
    //   setTimeout(next, 5000);
    // });
    this.server.use(cors());
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
