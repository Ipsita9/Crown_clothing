import "./cart-dropdown.style.scss";
import Button from "../button/button.component";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/cart.context";
import CartItem from "../cart-item/cart-item.component";
const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  console.log("CART ITEMS:", cartItems);
  console.log("Dropdown re-render:", cartItems.length);
  const navigate=useNavigate();

  const goToCheckoutHandler=()=>{
    navigate('/checkout')
  }


  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => (
            <CartItem key={item.id} cartItem={item} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>

      <Button  onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
