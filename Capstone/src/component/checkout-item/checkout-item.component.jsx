import {useSelector,useDispatch} from "react-redux";
import { addItemToCart,clearItemFromCart,removeItemFromCart } from "../../store/cart/cart.action";
import './checkout-item.style.scss';
import { selectCartItems } from "../../store/cart/cart.selector";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const cartItems=useSelector(selectCartItems);
  const dispatch=useDispatch();


  const increaseHandler = () => {
    dispatch(addItemToCart(cartItems, cartItem));
  };

  const decreaseHandler = () => {
    dispatch(removeItemFromCart(cartItems, cartItem));
  };

  const clearHandler = () => {
    dispatch(clearItemFromCart(cartItems, cartItem));
  };



  return (
    
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>

      <span className="name">{name}</span>

      <span className="quantity">
        <span
          className="arrow"
           onClick={decreaseHandler}
        >
          &#10094;
        </span>

        <span className="value">{quantity}</span>

        <span
          className="arrow"
          onClick={increaseHandler}
        >
          &#10095;
        </span>
      </span>

      <span className="price">${price}</span>

      <div
        className="remove-button"
        onClick={clearHandler }
      >
        ✕
      </div>
    </div>
  );
};

export default CheckoutItem;
