import React, {useEffect} from 'react';

const ItemDetail = ({ item }) => {
  return (
    <div>
      <h5>{item.title}</h5>
      <img src={item.image} alt={item.title} /> 
      <p>Descripción: {item.description}</p>
      <p>Precio: {item.price}</p>
      <p>Categoría: {item.category}</p>

    </div>
  );
}

export default ItemDetail;
