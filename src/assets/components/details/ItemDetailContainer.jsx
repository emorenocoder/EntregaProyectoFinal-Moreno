import React, { useState, useEffect, useContext } from 'react'
import ItemDetail from './ItemDetail'
import CartContext from '../../Context/CartContext/cartContext';
import { getOneDocument } from '../../Services/firebaseService';

const ItemDetailContainer = ({ id }) => {
    const [item, setitem] = useState(null);
    const onAdd = (q) => {
        addItem(item, q)
    };
    
    const { addItem } = useContext(CartContext);
   
    useEffect( () => {
        getOneDocument("items",id)
        .then(res => setitem(res))
    }, [])
    return (
        <>
            {
                item !== null &&
                <ItemDetail item={item} onAdd={onAdd} />

            }
        </>
    )
}

export default ItemDetailContainer




