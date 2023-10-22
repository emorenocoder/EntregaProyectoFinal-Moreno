import React from 'react';
import styles from "./stylemodule.css?inline";
import Counter from '../Counter/Counter';

const ItemDetail = ({ item, onAdd }) => {
    return (
      <div className={styles.container}>
        <h5 className={styles.title}>{item.name}</h5>
        <img src={item.image} className={styles.image} alt={item.name} />
        <p>
          Description: {item.description}
        </p>
        <p>
          Stock: {item.stock}
        </p>
        <p>
          Price: {item.price}
        </p>
        <p>
          Category: {item.category}
        </p>
        {/* Pasa item.stock como la propiedad 'stock' al componente Counter */}
        <Counter onAdd={onAdd} stock={item.stock} />
      </div>
    );
  }
  
  export default ItemDetail;
  


