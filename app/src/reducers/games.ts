import { 
  REQUEST_GAMES, 
  RECEIVE_GAMES, 
  START_SENDING_GAME, 
  SEND_GAME
} from '../actions/games';

import { ReceiveGamesAction, OtherAction } from '../types';

export function games(state = {
  list: [],
  isFetching: false,
}, action: ReceiveGamesAction | OtherAction) {
  switch (action.type) {
    case REQUEST_GAMES:
      return {
        ...state,
        isFetching: true
      }
    case RECEIVE_GAMES:
      return {
        ...state,
        isFetching: false,
        list: action.games,
        lastUpdated: action.receivedAt
      }
    case START_SENDING_GAME:
      return {
        ...state,
        isFetching: true
      }
    case SEND_GAME:
      return {
        ...state,
        isFetching: false
      }
    default:
      return state
  }
}