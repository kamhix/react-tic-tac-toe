type ADD_MOVE = 'ADD_MOVE';
type SET_GAME_STATUS = 'SET_GAME_STATUS';
type RESET_MOVES = 'RESET_MOVES';
type SET_NEXT_PLAYER = 'SET_NEXT_PLAYER';
type RESET_NEXT_PLAYER = 'RESET_NEXT_PLAYER';

export const ADD_MOVE: ADD_MOVE = 'ADD_MOVE';
export const RESET_MOVES: RESET_MOVES = 'RESET_MOVES';
export const SET_NEXT_PLAYER: SET_NEXT_PLAYER = 'SET_NEXT_PLAYER';
export const SET_GAME_STATUS: SET_GAME_STATUS = 'SET_GAME_STATUS';
export const RESET_NEXT_PLAYER: RESET_NEXT_PLAYER = 'RESET_NEXT_PLAYER';

export function addMove(squareNum: number, player: string) {
  return { type: ADD_MOVE, squareNum, player };
} 

export function resetMoves() {
  return { type: RESET_MOVES };
} 

export function setGameStatus(status: string, winner: string | null) {
  return { type: SET_GAME_STATUS, status, winner };
} 

export function setNextPlayer() {
  return { type: SET_NEXT_PLAYER };
} 

export function resetNextPlayer() {
  return { type: RESET_NEXT_PLAYER };
} 