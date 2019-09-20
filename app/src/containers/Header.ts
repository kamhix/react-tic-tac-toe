import { connect } from 'react-redux';
import Header from '../components/Header';

interface stateProps {
  nextPlayer: string;
};

const mapStateToProps = (state: stateProps): stateProps => {
  return {
    nextPlayer: state.nextPlayer
  }
}

export default connect(mapStateToProps) (Header)
