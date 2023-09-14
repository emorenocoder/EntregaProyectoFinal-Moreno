import Counter from './counter';

const CounterContainer = () => {
  const [count, setCount] = useState(0);
  const maxLimit = 10; // Límite máximo
  const minLimit = 0;  // Límite mínimo

  const sumar = () => {
    if (count < maxLimit) {
      setCount(count + 1);
    }
  };

  const restar = () => {
    if (count > minLimit) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <h1>Contador</h1>
      <Counter
        count={count}
        sumar={sumar}
        restar={restar}
        maxLimit={maxLimit}
        minLimit={minLimit}
      />
    </div>
  );
};

export default CounterContainer;
