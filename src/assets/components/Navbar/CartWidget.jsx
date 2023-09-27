import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faShoppingCart} />
    </div>
  );
}

export default CartWidget;

//Esta es mi manera de vincular iconos, pero no me salio 