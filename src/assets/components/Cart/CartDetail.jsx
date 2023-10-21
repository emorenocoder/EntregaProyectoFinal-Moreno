import React, { useContext, useState } from 'react';
import CartContext from '../../Context/CartContext/cartContext';
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import FormComponent from '../Form/FormComponent';

const CartDetail = () => {
    const [buyer, setBuyer] = useState({
        name: "",
        email: ""
    });

    const [errors, setErrors] = useState({
        name: "",
        email: ""
    });

    const [orderId, setOrderId] = useState("");
    
    const { cart, removeItem, clear } = useContext(CartContext);
    const navigate = useNavigate();

    const addToCart = () => {
        const purchase = {
            buyer,
            items: cart,
            date: new Date(),
            total: calculateTotal() // Implementa tu lógica para calcular el total aquí
        };

        const db = getFirestore();
        const orderCollection = collection(db, "orders");

        addDoc(orderCollection, purchase)
            .then((res) => navigate(`/checkout/${res.id}`))
            .catch((err) => console.error(err));

        clear();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBuyer({
            ...buyer,
            [name]: value
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        // Validación de datos
        const errorLocal = {};

        if (!buyer.name) {
            errorLocal.name = "El nombre es obligatorio";
        }

        if (!buyer.email) {
            errorLocal.email = "El email es obligatorio";
        }

        if (Object.keys(errorLocal).length === 0) {
            // No hay errores, puedes realizar la acción deseada, como agregar al carrito
            addToCart();
        } else {
            // Hay errores, establece el estado de errores para mostrarlos al usuario
            setErrors(errorLocal);
        }
    };

    const calculateTotal = () => {
        // Implementa tu lógica para calcular el total de la compra
        // Puedes recorrer el carrito y sumar los precios de los productos
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div>
            <h1>Carrito de Compras</h1>

            <FormComponent 
                formData={buyer}
                inputChange={handleChange}
                onSubmit={onSubmit}
                errors={errors}
            />

            {cart.map((el) => (
                <div className={styles.container} key={el.id}>
                    <div className={styles.cardBody}>
                        <p>Producto: {el.name}</p>
                        <p>Cantidad: {el.quantity}</p>
                    </div>
                    <img src={el.image} alt={el.name} className={styles.image} />
                    <button onClick={() => removeItem(el.id)} className={styles.cartButton}>
                        Eliminar
                    </button>
                </div>
            ))}

            {cart.length > 0 && (
                <div>
                    <p>Total de compra: ${calculateTotal()}</p>
                    <button className='btn btn-primary' onClick={onSubmit}>
                        Crear orden
                    </button>
                </div>
            )}

            {orderId && <span>Orden creada: {orderId}</span>}
        </div>
    );
}

export default CartDetail;
