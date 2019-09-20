import {
  nextPlayer,
  gameStatus,
  moves,
} from './moves'

describe('moves reducer', () => {
  it('should handle initial state', () => {
    expect(
      moves(undefined, {})
    ).toEqual([{ squares: Array(9).fill(null) }])
  })

  it('should handle ADD_MOVE', () => {
    expect(
      moves(undefined, {
        type: 'ADD_MOVE',
        squareNum: 0,
        player: 'X'
      })
    ).toEqual([
      { squares: Array(9).fill(null) },
      {
        squares: [
          'X', null, null, 
          null, null, null, 
          null, null, null
        ]
      }
    ])

    expect(
      moves([
        { squares: Array(9).fill(null) },
        {
          squares: [
            'X', null, null,
            null, null, null,
            null, null, null
          ]
        }
      ], {
        type: 'ADD_MOVE',
        squareNum: 3,
        player: 'O'
      })
    ).toEqual([
      { squares: Array(9).fill(null) },
      {
        squares: [
          'X', null, null, 
          null, null, null, 
          null, null, null
        ]
      },
      {
        squares: [
          'X', null, null, 
          'O', null, null, 
          null, null, null
        ]
      }
    ])
  })

  it('should handle RESET_MOVES', () => {
    expect(
      moves(undefined, {
        type: 'ADD_MOVE',
        squareNum: 0,
        player: 'X'
      })
    ).toEqual([
      { squares: Array(9).fill(null) },
      {
        squares: [
          'X', null, null, 
          null, null, null, 
          null, null, null
        ]
      }
    ])

    expect(
      moves([
        { squares: Array(9).fill(null) },
        {
          squares: [
            'X', null, null,
            null, null, null,
            null, null, null
          ]
        }
      ], {
        type: 'RESET_MOVES'
      })
    ).toEqual([
      { squares: Array(9).fill(null) }
    ])
  })
})

describe('gameStatus reducer', () => {
  it('should handle initial state', () => {
    expect(
      gameStatus(undefined, {})
    ).toEqual({ status: 'ongoing', winner: null })
  })

  it('should handle SET_GAME_STATUS', () => {
    expect(
      gameStatus(undefined, {
        type: 'SET_GAME_STATUS',
        status: 'win',
        winner: 'X'
      })
    ).toEqual({
      status: 'win',
      winner: 'X'
    })
  })
})

describe('nextPlayer reducer', () => {
  it('should handle initial state', () => {
    expect(
      nextPlayer(undefined, {})
    ).toBe('X')
  })

  it('should handle SET_NEXT_PLAYER', () => {
    expect(
      nextPlayer(undefined, {
        type: 'SET_NEXT_PLAYER'
      })
    ).toBe('O')
    
    expect(
      nextPlayer('O', {
        type: 'SET_NEXT_PLAYER'
      })
    ).toBe('X')
  })
  
  it('should handle RESET_NEXT_PLAYER', () => {
    expect(
      nextPlayer('O', {
        type: 'RESET_NEXT_PLAYER'
      })
    ).toBe('X')
  })
})