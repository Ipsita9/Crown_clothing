import { useContext } from 'react';
import { CartContext } from "../../context/cart.context";
import './checkout-item.style.scss';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const {
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart
  } = useContext(CartContext);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>

      <span className="name">{name}</span>

      <span className="quantity">
        <span
          className="arrow"
          onClick={() => removeItemFromCart(cartItem)}
        >
          &#10094;
        </span>

        <span className="value">{quantity}</span>

        <span
          className="arrow"
          onClick={() => addItemToCart(cartItem)}
        >
          &#10095;
        </span>
      </span>

      <span className="price">${price}*{quantity}</span>

      <div
        className="remove-button"
        onClick={() => clearItemFromCart(cartItem)}
      >
        ✕
      </div>
    </div>
  );
};

export default CheckoutItem;
