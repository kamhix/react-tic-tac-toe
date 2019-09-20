import * as actions from './games'

describe('todo actions', () => {
  it('startSendingGames should create START_SENDING_GAME action', () => {
    expect(actions.startSendingGames()).toEqual({
      type: actions.START_SENDING_GAME
    })
  })

  it('sendGames should create SEND_GAME action', () => {
    expect(actions.sendGames()).toEqual({
      type: actions.SEND_GAME
    })
  })

  it('requestGames should create REQUEST_GAMES action', () => {
    expect(actions.requestGames()).toEqual({
      type: actions.REQUEST_GAMES
    })
  })
})
