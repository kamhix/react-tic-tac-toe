import React from 'react'
import Header from '../containers/Header'
import Game from '../containers/Game'
import { Link } from "react-router-dom";

interface HomeProps {
  resetGame: () => void;
}

class Home extends React.Component<HomeProps, object> {
  render() {
    this.props.resetGame();
    return (
      <div>
        <Header />
        <Game />
        <div id="menu-mobile">
          <Link to="/score">Score History</Link>
        </div>
      </div>
    );
  };
}

export default Home
