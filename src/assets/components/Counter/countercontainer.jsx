import React, { useState } from 'react';
import Counter from './counter';

const CounterContainer = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  }

  const handleDecrement = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  }

  return (
    <Counter count={count} onIncrement={handleIncrement} onDecrement={handleDecrement} />
  );
}

export default CounterContainer;
