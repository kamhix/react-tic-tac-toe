
type REQUEST_GAMES = 'REQUEST_GAMES';
type RECEIVE_GAMES = 'RECEIVE_GAMES';
type START_SENDING_GAME = 'START_SENDING_GAME';
type SEND_GAME = 'SEND_GAME';

type ADD_MOVE = 'ADD_MOVE';
type SET_GAME_STATUS = 'SET_GAME_STATUS';
type RESET_MOVES = 'RESET_MOVES';
type SET_NEXT_PLAYER = 'SET_NEXT_PLAYER';
type RESET_NEXT_PLAYER = 'RESET_NEXT_PLAYER';

export type ReceiveGamesAction = {
  type: RECEIVE_GAMES,
  games: []
  receivedAt: Date
};

export type AddMoveAction = {
  type: ADD_MOVE,
  squareNum: number
  player: string
};

export type setGameStatusAction = {
  type: SET_GAME_STATUS,
  status: string
  winner: string
};

export type OtherAction = {
  type: REQUEST_GAMES | START_SENDING_GAME | SEND_GAME | SET_NEXT_PLAYER | RESET_NEXT_PLAYER | RESET_MOVES,
};

export interface MoveProps {
  squares: Array<string | null>
}

export interface GameProps {
  moves: [MoveProps];
  _id: string;
  status?: string;
  message: string;
}