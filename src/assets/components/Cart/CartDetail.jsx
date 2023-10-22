import React, { useContext, useState } from 'react';
import CartContext from '../../Context/CartContext/cartContext';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import FormComponent from '../Form/FormComponent';
import styles from "./style.module.css?inline";

const CartDetail = () => {
  const { cart, removeItem, clear } = useContext(CartContext);
  const navigate = useNavigate();

  const [buyer, setBuyer] = useState({ name: '', email: '' });
  const [errors, setErrors] = useState({ name: '', email: '' });
  const [orderId, setOrderId] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBuyer({ ...buyer, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const errorLocal = {};

    if (!buyer.name) {
      errorLocal.name = 'El nombre es obligatorio';
    }

    if (!buyer.email) {
      errorLocal.email = 'El email es obligatorio';
    }

    if (Object.keys(errorLocal).length === 0) {
      addToCart();
    } else {
      setErrors(errorLocal);
    }
  };

  const addToCart = () => {
    const purchase = {
      buyer,
      items: cart,
      date: new Date(),
      total: 1000,
    };

    const db = getFirestore();
    const orderCollection = collection(db, 'orders');

    addDoc(orderCollection, purchase)
      .then((res) => {
        navigate(`/checkout/${res.id}`);
      })
      .catch((err) => {
        console.log(err);
      });

    clear();
  };

  return (
    <div>
      <h2>CART</h2>
      <FormComponent
        formData={buyer}
        inputChange={handleChange}
        onSubmit={onSubmit}
        errors={errors}
      />

      {cart.map((el) => (
        <div className={styles.container} key={el.id}>
          <div className={styles.cardBody}>
            <p>Product: {el.name}</p>
            <p>Cantidad: {el.quantity}</p>
          </div>
          <img src={el.image} alt={el.name} className={styles.image} />
          <button
            onClick={() => removeItem(el.id)}
            className={styles.cartButton}
          >
            Eliminar
          </button>
        </div>
      ))}

      {cart.length > 0 && (
        <button className="btn btn-primary" onClick={onSubmit}>
          Create order
        </button>
      )}

      {orderId && <span>Order created: {orderId}</span>}
    </div>
  );
};

export default CartDetail;
