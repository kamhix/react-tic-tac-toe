import React from 'react';

interface Props {
  value: string | null;
  onClick: () => void;
};

export default function Square(props: Props) {
  return (
    <button className={'square square-' + props.value} onClick={() => props.onClick()}>
      {props.value}
    </button>
  );
}