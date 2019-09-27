import { calculateWinner, calculateDraw } from './utils'

describe('calculateWinner function', () => {
  it('should not declare any winner ', () => {
    expect(
      calculateWinner([
        'X', null, null,
        null, null, null,
        null, null, null
      ])
    ).toBe(null)
  })

  it('should declare X winner', () => {
    expect(
      calculateWinner([
        'X', 'X', 'X',
        null, 'O', null,
        null, null, 'X'
      ])
    ).toBe('X')
    
    expect(
      calculateWinner([
        null, 'O', null,
        'X', 'X', 'X',
        null, null, 'X'
      ])
    ).toBe('X')

    expect(
      calculateWinner([
        null, 'O', null,
        null, null, 'X',
        'X', 'X', 'X'
      ])
    ).toBe('X')
    
    expect(
      calculateWinner([
        'X', null, 'X',
        'X', 'O', null,
        'X', null, 'X'
      ])
    ).toBe('X')
    
    expect(
      calculateWinner([
        null, 'X', null,
        'O', 'X', 'O',
        'O', 'X', null
      ])
    ).toBe('X')

    expect(
      calculateWinner([
        null, null, 'X',
        'O', 'O', 'X',
        null, 'O', 'X'
      ])
    ).toBe('X')

    expect(
      calculateWinner([
        null, null, 'X',
        'O', 'X', 'O',
        'X', 'O', null
      ])
    ).toBe('X')

    expect(
      calculateWinner([
        'X', null, null,
        'O', 'X', 'O',
        'X', 'O', 'X'
      ])
    ).toBe('X')
    
  })
  
  it('should declare O winner', () => {
    expect(
      calculateWinner([
        'O', null, null,
        'O', 'X', null,
        'O', null, 'X'
      ])
    ).toBe('O')
  })
})

describe('calculateDraw function', () => {
  it('should not declare draw', () => {
    expect(
      calculateDraw([
        'X', null, null,
        null, null, null,
        null, null, null
      ])
    ).toBe(false)
  })
  
  it('should declare draw', () => {
    expect(
      calculateDraw([
        'X', 'O', 'X',
        'X', 'O', 'O',
        'O', 'X', 'X'
      ])
    ).toBe(true)
  })
})
