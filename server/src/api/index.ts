import express from 'express';
import errorHandler from '../middleware';
import Game from '../models/game';
import games from '../controllers/game';
import { Model, Document} from 'mongoose';
import IGame from '../interface/game';
import IConfig from '../interface/config';

interface ModelsOptions {
  Game: Model<IGame & Document>;
};

const models:ModelsOptions = { Game };

export default (config: IConfig) => {
  const router:express.Application = express();
  
  router.get('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.send('Welcome to Tic Tac Toe API !');
  });

  router.use('/games', games(models, {config}));

  router.use(errorHandler);
  return router;
}