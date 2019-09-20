import { 
  ADD_MOVE, 
  RESET_MOVES, 
  SET_NEXT_PLAYER, 
  RESET_NEXT_PLAYER, 
  SET_GAME_STATUS 
} from '../actions/moves'

import { setGameStatusAction, AddMoveAction, OtherAction } from '../types';

interface gameStatusState { 
  status: string, 
  winner: null | string 
}

export function nextPlayer(state = 'X', action: OtherAction) {
  switch (action.type) {
    case SET_NEXT_PLAYER:
      return state === 'X' ? 'O': 'X';
    case RESET_NEXT_PLAYER:
      return 'X';
    default:
      return state
  }
}

export function gameStatus(state: gameStatusState = { status: 'ongoing', winner: null }, action: setGameStatusAction) {
  switch (action.type) {
    case SET_GAME_STATUS:
      return {
        status: action.status,
        winner: action.winner
      };
    default:
      return state
  }
}

export function moves(state = [{ squares: Array(9).fill(null) }], action: AddMoveAction | OtherAction) {
  switch (action.type) {
    case ADD_MOVE:
      const current = state[state.length - 1];
      const squares = current.squares.slice();
      squares[action.squareNum] = action.player;
      return [
        ...state,
        {
          squares: squares
        }
      ]
    case RESET_MOVES: 
      return [{ squares: Array(9).fill(null) }]
    default:
      return state
  }
}