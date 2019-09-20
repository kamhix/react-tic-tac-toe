import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from '../containers/Home'
import Score from '../containers/Score'

const AppRouter = () => (
  <Router>
    <div id="app-content">
      <nav>
        <ul>
          <li>
            <Link to="/">Start a game</Link>
          </li>
          <li>
            <Link to="/score">Score History</Link>
          </li>
        </ul>
      </nav>

      <Route path="/" exact component={Home} />
      <Route path="/score" component={Score} />
    </div>
  </Router>
);

export default AppRouter
