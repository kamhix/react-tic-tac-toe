import React from 'react';
import Square from './Square';

export interface BoardRowProps {
  squares: Array<string | null>;
  multiplier: number;
  onClick: (i:number) => void;
};

export interface BoardProps {
  squares: Array<string | null>;
  onClick: (i:number) => void;
};

class BoardRow extends React.Component<BoardRowProps, object> {
  renderSquare(i: number): React.ReactElement {
    return (
      <Square key={i}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render () {
    var cols: React.ReactElement[] = [];

    for (let i = 0; i < 3; i++) {
      cols.push(this.renderSquare(i + this.props.multiplier));
    }

    return (
      <div className="board-row">
        {cols}
      </div>
    );
  }
}

export default class Board extends React.Component<BoardProps, object> {
  render() {
    var rows: React.ReactElement[] = [];

    for (let j = 0; j < 3; j++) {
      rows.push(
        <BoardRow key={j}
          multiplier={j * 3}
          squares={this.props.squares}
          onClick={(i) => this.props.onClick(i)}
        />);
    }

    return (
      <div>
        {rows}
      </div>
    );
  }
}