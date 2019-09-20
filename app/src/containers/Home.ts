import { connect } from 'react-redux'
import { resetMoves, setGameStatus, resetNextPlayer } from '../actions/moves'
import Home from '../components/Home'
import { Dispatch } from 'redux';

const mapDispatchToProps = (dispatch: Dispatch)  => {
  return {
    resetGame: () => {
      dispatch(setGameStatus('ongoing', null))
      dispatch(resetMoves());
      dispatch(resetNextPlayer());
    }
  }
}

export default connect(null, mapDispatchToProps) (Home)
