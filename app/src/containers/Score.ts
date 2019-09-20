import { connect } from 'react-redux'
import { fetchGames } from '../actions/games'
import Score from '../components/Score'
import config from '../config'
import { GameProps } from '../types'

const mapStateToProps = (state: { games: {list: [GameProps]} }) => {
  return {
    games: state.games.list,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    loadScores: () => {
      dispatch(fetchGames(config.baseUrl))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Score)
