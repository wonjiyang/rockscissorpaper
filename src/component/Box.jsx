import React from 'react';
import initialImg from '../assets/initial.png';

const Box = (props) => {
  let result;
  if (
    props.title === 'computer' &&
    props.result !== 'tie' &&
    props.result !== ''
  ) {
    result = props.result === 'win' ? 'lose' : 'win';
  } else {
    result = props.result;
  }

  return (
    <div className={`box ${result} ${props.title}`}>
      {' '}
      <h1>{props.title}</h1>
      <img
        className="item-img"
        src={props.item ? props.item.img : initialImg}
        alt={props.title}
      />
      <h2>{result ? result : 'Who will win?'}</h2>
    </div>
  );
};

export default Box;
