import "./cart-dropdown.style.jsx";
// import Button from "../button/button.component";
import Button,{BUTTON_TYPE_CLASSES} from "../button/button.component";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/cart.context";
import CartItem from "../cart-item/cart-item.component";
import {CartDropDownContainer,CartItemContainer,CheckoutButton,EmptyMessage} from "./cart-dropdown.style.jsx";
const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  console.log("CART ITEMS:", cartItems);
  console.log("Dropdown re-render:", cartItems.length);
  const navigate=useNavigate();

  const goToCheckoutHandler=()=>{
    navigate('/checkout')
  }


  return (
    <CartDropDownContainer>
      <CartItemContainer>
        {cartItems.length ? (
          cartItems.map((item) => (
            <CartItem key={item.id} cartItem={item} />
          ))
        ) : (
          < EmptyMessage>Your cart is empty</ EmptyMessage>
        )}
      </CartItemContainer>

      <CheckoutButton  buttonType={BUTTON_TYPE_CLASSES.inverted}  onClick={goToCheckoutHandler}>GO TO CHECKOUT</CheckoutButton>
    </CartDropDownContainer>
  );
};

export default CartDropdown;
