import React from 'react';
import GameReplay from './GameReplay';
import { GameProps } from '../types';
import { Link } from "react-router-dom";

interface ScoreProps {
  games: [GameProps];
  loadScores: () => void;
}

interface ScoreState {
  currentGame: GameProps | null;
  index: number;
  showDetail: boolean;
}

export default class Score extends React.Component<ScoreProps, ScoreState> {

  constructor (props: ScoreProps) {
    super(props);

    this.state = {
      currentGame: null,
      index: 0,
      showDetail: false
    }
  }

  jumpTo(step: number) {
    this.setState({
      currentGame: this.state.currentGame,
      index: step,
      showDetail: this.state.showDetail
    });
  }

  componentDidMount () {
    this.props.loadScores();
  }

  render () {
    const lines = this.props.games.map(game => {
      return (
        <tr key={game._id}>
          <td data-th="Status">{game.status}</td>
          <td data-th="Message">{game.message}</td>
          <td><button onClick={() => {this.setState({currentGame: game, index: 0, showDetail: true})}}>Replay</button></td>
        </tr>
      )
    })
    return (
      <div>
        <h1 className="page-title">Score History</h1>
        <table className={'rwd-table table-score ' + (!this.state.showDetail ? '' : 'd-none')}>
          <thead>
            <tr>
              <th>Status</th><th>Message</th><th></th>
            </tr>
          </thead>
          <tbody>
            {lines}
          </tbody>
        </table>
        <div className={'score-detail ' + (this.state.showDetail ? '' : 'd-none')}>
          <button className="btn" onClick={() => {this.setState({ currentGame: null, index: 0, showDetail: false })}}>Back</button>
          <GameReplay game={this.state.currentGame} index={this.state.index} jumpTo={(i) => {this.jumpTo(i)}}/>
        </div>

        <div id="menu-mobile">
          <Link to="/">Start new game</Link>
        </div>
      </div>
    );
  }
}
