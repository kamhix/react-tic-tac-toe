import { Request, Response, NextFunction } from 'express';
import IConfig from '../../interface/config';
import IGame from '../../interface/game';
import { Model, Document } from 'mongoose';

interface Options {
  config: IConfig;
};

interface ModelsOptions {
  Game: Model<IGame & Document>;
};

const post = ({ Game }: ModelsOptions, { config }: Options) => async (req: Request, res: Response, next: NextFunction) => {
  const { moves, status, message } = req.body;

  try {
    let game:IGame & Document = new Game({
      moves,
      ipAddress: req.clientIp,
      status,
      message
    });

    await game.save();
    res.status(200).send({ message: 'Game saved'});
  } catch (err) {
    next(err);
  }
};

export default post;