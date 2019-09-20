import React from 'react';
import Board from './Board';
import { GameProps } from '../types'

interface GameReplayProps {
  game: GameProps | null;
  index: number;
  jumpTo: (m: number) => void;
}

export default function GameReplay (props: GameReplayProps) {
  if (props.game) {
    const current = props.game.moves[props.index];
    const moves = props.game.moves.map((step: any, move: number) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li key={move}>
          <button 
            className={props.index === move ? 'active' : ''} 
            onClick={() => props.jumpTo(move)}>
            {desc}
          </button>
        </li>
      );
    });

    return (
      <div className="game" key={props.game._id}>
        <div className="game-board">
          <Board squares={current.squares} onClick={(i) => {}} />
        </div>
        <div className="game-info">
          <div>{props.game.message}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
