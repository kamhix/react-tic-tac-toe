import React from 'react';

export interface AlertProps {
  type: string; 
  title: string; 
  description: React.ReactElement | string; 
  onCancelClick: () => void; 
  cancelText: string; 
  onConfirmClick: () => void; 
  confirmText: string;
};

function AlertElement(props: AlertProps) {
  return (
    <div className="popup-wrapper">
      <div className={"popup popup-" + props.type}>
        <h1>{props.title}</h1>
        <div>{props.description}</div>
        <div className="btn-row">
          <button className="btn" onClick={() => props.onCancelClick()}>
            {props.cancelText}
          </button>
          <button className="btn btn-success" onClick={() => props.onConfirmClick()}>
            {props.confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}

export interface Props {
  gameStatus: {
    status: string,
    winner: string | null
  };
  onResetGame: (full?: boolean) => void;
}

export default class Alert extends React.Component<Props, object> {
  render() {
    if (this.props.gameStatus && this.props.gameStatus.status === 'success') {
      return (
        <AlertElement
          type="success"
          title="Win !"
          cancelText="Back"
          onCancelClick={() => { this.props.onResetGame() }}
          confirmText="New Game"
          onConfirmClick={() => { this.props.onResetGame(true) }}
          description={
            this.props.gameStatus.winner === 'X' ?
              <div><span className="pl1">Player 1</span> has won this game !</div> :
              <div><span className="pl2">Player 2</span> has won this game !</div>}
        />
      )
    } else if (this.props.gameStatus && this.props.gameStatus.status === 'draw') {
      return (
        <AlertElement
          type="draw"
          title="Draw !"
          cancelText="Back"
          onCancelClick={() => { this.props.onResetGame() }}
          confirmText="New Game"
          onConfirmClick={() => { this.props.onResetGame(true) }}
          description="It's a draw!"
        />
      )
    } else {
      return null;
    }
  }
}