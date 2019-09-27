import {model, Document} from 'mongoose';
import schema from './schema';
import IGame from '../../interface/game';

const Game = model<IGame & Document>('Game', schema);

export default Game;