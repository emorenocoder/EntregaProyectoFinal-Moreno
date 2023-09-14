
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
  const itemCount = 3; // Número fijo (hardcodeado) para la notificación

  return (
    <div className="cart-widget">
      <FaShoppingCart className="cart-icon" />
      <span className="cart-notification">{itemCount}</span>
    </div>
  );
};

export default CartWidget;
