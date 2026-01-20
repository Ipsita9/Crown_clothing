
import {useDispatch,useSelector} from "react-redux";
import {selectCartCount,selectIsCartOpen} from "../../store/cart/cart.selector";
import{setIsCartOpen} from "../../store/cart/cart.action.js";

import shoppingIcon from "../../assets/shopping-bag (1).png";
import {CartIconContainer,ShoppingIcon,CountInside } from "./card-icon.style.jsx";


const CartIcon = () => {
  const dispatch = useDispatch();
  const cartCount =useSelector(selectCartCount);
  const isCartOpen=useSelector(selectIsCartOpen);
  
  const toggleIsCartOpen = () => {
  dispatch(setIsCartOpen(!isCartOpen));
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
