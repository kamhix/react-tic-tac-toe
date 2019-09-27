import {Request, Response, NextFunction} from 'express';
import IConfig from '../../interface/config';
import IGame from '../../interface/game';
import { Model, Document } from 'mongoose';

interface Options {
  config: IConfig;
};

interface ModelsOptions {
  Game: Model<IGame & Document>;
};

const list = ({ Game }: ModelsOptions, {config}: Options) => (req: Request, res: Response, next: NextFunction) => {
  Game.find({ ipAddress: req.clientIp })
    .sort('-createdAt')
    .exec((err: any, games: [IGame]) => {
      if (err) {
        return next(err);
      }
      res.status(200).send({games});
    });
};

export default list;