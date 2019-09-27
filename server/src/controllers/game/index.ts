import express from 'express';
import list from './list';
import post from './post';
import {Model, Document} from 'mongoose'; 
import IGame from '../../interface/game';
import IConfig from '../../interface/config';

interface Options {
  config: IConfig;
};

interface ModelsOptions {
  Game: Model<IGame & Document>;
};

export default (models: ModelsOptions, { config }: Options) => {
  const api = express();

  api.get('/', list(models, { config }));
  api.post('/', post(models, { config }));

  return api;
}