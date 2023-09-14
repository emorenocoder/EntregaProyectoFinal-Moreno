import "../Card/button";


const Counter = ({ count, sumar, restar, maxLimit, minLimit }) => {
  return (
    <div>
      <p>Valor: {count}</p>
      <button onClick={sumar} disabled={count >= maxLimit}>Sumar</button>
      <button onClick={restar} disabled={count <= minLimit}>Restar</button>
    </div>
  );
};

export default Counter;
