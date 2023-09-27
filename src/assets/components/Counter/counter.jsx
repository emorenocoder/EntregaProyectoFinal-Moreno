import React from 'react';

const Counter = ({ count, onIncrement, onDecrement }) => {
  return (
    <div>
      <button onClick={onIncrement}>Agregar</button>
      <span>{count}</span>
      <button onClick={onDecrement}>Restar</button>
    </div>
  );
}

export default Counter;
