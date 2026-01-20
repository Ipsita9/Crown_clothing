import "./cart-dropdown.style.jsx";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../store/cart/cart.selector.js";
import {
  CartDropDownContainer,
  CartItemContainer,
  CheckoutButton,
  EmptyMessage,
} from "./cart-dropdown.style.jsx";
const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  console.log("CART ITEMS:", cartItems);
  console.log("Dropdown re-render:", cartItems.length);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropDownContainer>
      <CartItemContainer>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItemContainer>

      <CheckoutButton
        $buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={goToCheckoutHandler}
      >
        GO TO CHECKOUT
      </CheckoutButton>
    </CartDropDownContainer>
  );
};

export default CartDropdown;
