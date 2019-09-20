import React from 'react';

const Header = ({nextPlayer}: { nextPlayer: string}) => {
  return (
    <div className="text-center">
      <h1 className="page-title">Tic-Tac-Toe</h1>
      <div className="flex-row">
        <div className="flex-col pl1">Player 1: X</div>
        <div className="flex-col pl2">Player 2: O</div>
      </div>
      <div className="next-player">Next player: 
        {
          nextPlayer === 'X' ? 
          <span className="pl1">Player 1</span> : 
          <span className="pl2">Player 2</span>
        }
      </div>
    </div>
  );
}

export default Header;