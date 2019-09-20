import { connect } from 'react-redux'
import { calculateWinner, calculateDraw } from '../utils';
import { addMove, resetMoves, setGameStatus, setNextPlayer, resetNextPlayer } from '../actions/moves';
import { postGame } from '../actions/games';
import config from '../config';
import Game from '../components/Game';
import { MoveProps } from '../types'

interface gameStatusState {
  status: string,
  winner: null | string
}

interface stateProp { 
  moves: [MoveProps]; 
  nextPlayer: string; 
  gameStatus: gameStatusState; 
}

const mapStateToProps = (state: stateProp) => {
  return {
    moves: state.moves,
    player: state.nextPlayer,
    gameStatus: state.gameStatus
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    onSquareClick: (i: number, player: string, squares: Array<string | null>, moves: [MoveProps]) => {
      if (squares[i]) {
        return;
      }
      squares = squares.slice();
      squares[i] = player;

      dispatch(addMove(i, player));
      const cw = calculateWinner(squares);
      if (cw) { 
        const message = cw === 'X' ? 
          'Player 1 wins the match':  
          'Player 2 wins the match';  
        dispatch(setGameStatus('success', cw))
        return dispatch(postGame(config.baseUrl, 'win', message, [...moves, {squares}]));
      }
      
      if (calculateDraw(squares)) { 
        dispatch(setGameStatus('draw', null))
        return dispatch(postGame(config.baseUrl, 'draw', 'It\'s a draw', [...moves, {squares}]));
      }
      
      dispatch(setNextPlayer());
    },
    onResetGame: (full?: boolean) => {
      dispatch(setGameStatus('ongoing', null))
      if (full) {
        dispatch(resetMoves());
        dispatch(resetNextPlayer());
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Game)
