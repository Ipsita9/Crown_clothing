
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import shoppingIcon from "../../assets/shopping-bag (1).png";
import "./card-icon.style.scss";


const CartIcon = () => {
  const { isCartOpen,setIsCartOpen,cartCount} = useContext(CartContext);


  const toggleIsCartOpen = () => {
    console.log("icon clicked");
    setIsCartOpen(prev => !prev);
  };

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <img src={shoppingIcon} alt="cart" className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
