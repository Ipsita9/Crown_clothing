
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import shoppingIcon from "../../assets/shopping-bag (1).png";
import {CartIconContainer,ShoppingIcon,CountInside } from "./card-icon.style.jsx";


const CartIcon = () => {
  const { isCartOpen,setIsCartOpen,cartCount} = useContext(CartContext);


  const toggleIsCartOpen = () => {
    console.log("icon clicked");
    setIsCartOpen(prev => !prev);
  };

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon src={shoppingIcon} alt="cart" className="shopping-icon" />

      {cartCount > 0 && (
        <CountInside>{cartCount}</CountInside>
      )}
    </CartIconContainer>
  );
};

export default CartIcon;
