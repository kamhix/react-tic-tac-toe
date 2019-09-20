import React from 'react';
import Board from './Board';
import Alert from './Alert';
import { MoveProps } from '../types'

interface gameStatusState {
  status: string,
  winner: null | string
}

interface Props {
  moves: [MoveProps];
  player: string;
  gameStatus: gameStatusState;
  onResetGame: (full?: boolean) => void;
  onSquareClick: (i: number, player: string, squares: Array<string | null>, moves: [MoveProps] ) => void;
};

const Game = (props: Props): React.ReactElement => {
  const current = props.moves[props.moves.length - 1];
  return (
    <div className="game-board">
      <Alert gameStatus={props.gameStatus} onResetGame={props.onResetGame} />
      <Board
        squares={current.squares}
        onClick={(i) => props.onSquareClick(i, props.player, current.squares, props.moves)}
      />
    </div>
  );
};

export default Game;