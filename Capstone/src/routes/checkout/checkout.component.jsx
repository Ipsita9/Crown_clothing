import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

import "./checkout.style.scss";
import CheckoutItem from "../../component/checkout-item/checkout-item.component";

const CheckoutPage = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quanity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      ;<span>Total:${cartTotal}</span>
    </div>
  );
};

export default CheckoutPage;
