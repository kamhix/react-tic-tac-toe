import { Dispatch } from 'redux';

type REQUEST_GAMES = 'REQUEST_GAMES';
type RECEIVE_GAMES = 'RECEIVE_GAMES';
type START_SENDING_GAME = 'START_SENDING_GAME';
type SEND_GAME = 'SEND_GAME';

export const REQUEST_GAMES: REQUEST_GAMES = 'REQUEST_GAMES';
export const RECEIVE_GAMES: RECEIVE_GAMES = 'RECEIVE_GAMES';
export const START_SENDING_GAME: START_SENDING_GAME = 'START_SENDING_GAME';
export const SEND_GAME: SEND_GAME = 'SEND_GAME';

export interface movesProp { 
  squares: Array<string | null>;
};

export const startSendingGames = () => ({
  type: START_SENDING_GAME
})

export const sendGames = (json: {message: string}) => ({
  type: SEND_GAME
})

export const requestGames = () => ({
  type: REQUEST_GAMES
})

export const receiveGames = (json:{games: []}) => ({
  type: RECEIVE_GAMES,
  games: json.games,
  receivedAt: Date.now()
})

export const postGame = (baseUrl: string, status: string, message: string, moves: movesProp[]) => (dispatch: Dispatch) => {
  dispatch(startSendingGames())
  return fetch(`${baseUrl}/games`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ status, message, moves})
    })
    .then(response => response.json())
    .then(json => dispatch(sendGames(json)));
}

export const fetchGames = (baseUrl:string) => (dispatch: Dispatch) => {
  dispatch(requestGames());
  return fetch(`${baseUrl}/games`)
    .then(response => response.json())
    .then(json => dispatch(receiveGames(json)));
}