import { combineReducers } from 'redux'
import { nextPlayer, gameStatus, moves } from './moves'
import { games } from './games'

const rootReducer = combineReducers({
  nextPlayer,
  gameStatus,
  moves,
  games
})

export default rootReducer