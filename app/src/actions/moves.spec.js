import * as actions from './moves'

describe('todo actions', () => {
  it('addMove should create ADD_MOVE action', () => {
    expect(actions.addMove(0, 'X')).toEqual({
      type: actions.ADD_MOVE,
      squareNum: 0,
      player: 'X'
    })
  })

  it('resetMoves should create RESET_MOVES action', () => {
    expect(actions.resetMoves()).toEqual({
      type: actions.RESET_MOVES
    })
  })

  it('setNextPlayer should create SET_NEXT_PLAYER action', () => {
    expect(actions.setNextPlayer()).toEqual({
      type: actions.SET_NEXT_PLAYER
    })
  })
  
  it('setGameStatus should create SET_GAME_STATUS action', () => {
    expect(actions.setGameStatus('win', 'X')).toEqual({
      type: actions.SET_GAME_STATUS,
      status: 'win',
      winner: 'X'
    })
  })
  
  it('resetNextPlayer should create RESET_NEXT_PLAYER action', () => {
    expect(actions.resetNextPlayer()).toEqual({
      type: actions.RESET_NEXT_PLAYER
    })
  })
})
