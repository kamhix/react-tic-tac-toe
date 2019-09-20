import { games } from './games'

describe('games reducer', () => {
  it('should handle initial state', () => {
    expect(
      games(undefined, {})
    ).toEqual({
      list: [],
      isFetching: false,
    })
  })

  it('should handle REQUEST_GAMES', () => {
    expect(
      games(undefined, {
        type: 'REQUEST_GAMES'
      })
    ).toEqual({
      list: [],
      isFetching: true
    })
  })
  
  it('should handle RECEIVE_GAMES', () => {
    const d = Date.now();
    expect(
      games(undefined, {
        type: 'RECEIVE_GAMES',
        games: [],
        receivedAt: d
      })
    ).toEqual({
      isFetching: false,
      list: [],
      lastUpdated: d
    })
  })

  it('should handle START_SENDING_GAME', () => {
    expect(
      games(undefined, {
        type: 'START_SENDING_GAME'
      })
    ).toEqual({
      list: [],
      isFetching: true
    })
  })

  it('should handle SEND_GAME', () => {
    expect(
      games(undefined, {
        type: 'SEND_GAME'
      })
    ).toEqual({
      list: [],
      isFetching: false
    })
  })
})
