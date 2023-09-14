import React, { useState } from 'react';
import './assets/components/Card/Card.css';
import './assets/components/Card/button.css';
import { FaShoppingCart } from 'react-icons/fa';

const App = () => {
  // Arreglo de datos de las tarjetas
  const cardsData = [
    {
      title: 'titulo1',
      description: 'descripcion1',
      img: 'https://via.placeholder.com/100x180',
    },
    {
      title: 'titulo2',
      description: 'descripcion2',
      img: 'https://via.placeholder.com/100x180',
    },
    {
      title: 'titulo3',
      description: 'descripcion3',
      img: 'https://via.placeholder.com/100x180',
    },
  ];

  // Estado y funciones del contador
  const [count, setCount] = useState(0);
  const maxLimit = 10;
  const minLimit = 0;

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
    <div
      className="container"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
      }}
    >
      <h1>components</h1>
      <div
        className="centered-container"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {cardsData.map((card, index) => (
          <div className="col-3" key={index} style={{ margin: '10px' }}>
            <div className="custom-card">
              <img
                className="card-image"
                src={card.img}
                alt={card.title}
              />
              <div className="card-body">
                <h3 className="card-title">{card.title}</h3>
                <p className="card-text">{card.description}</p>
                <button className="btn-primary">Go somewhere</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <h1>Contador</h1>
        <div>
          <p>Valor: {count}</p>
          <button onClick={sumar} disabled={count >= maxLimit}>
            Sumar
          </button>
          <button onClick={restar} disabled={count <= minLimit}>
            Restar
          </button>
        </div>
      </div>
      <nav className="navbar">
        <div
          className="navbar-brand"
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
          }}
        >
          <div className="cart-widget">
            <FaShoppingCart className="cart-icon" style={{ fontSize: '50px' }} />
            <span className="cart-notification">3</span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default App;
