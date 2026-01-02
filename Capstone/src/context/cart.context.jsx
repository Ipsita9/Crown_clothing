import { createContext, useState } from "react";

// Helper function
const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};



const removeCartItem=(cartItems,cartItemToRemove)=>{
  // find the cart to remove

  const existingCartItem=cartItems.find(
    (cartItem)=>cartItem.id===cartItemToRemove.id
  );

  // check if quantity is equal to 1 if it is removed that then item from the cart 
  if(existingCartItem.quantity===1){
    return cartItems.filter(cartItem=>cartItem.id!==cartItemToRemove.id);
  } 
  return cartItems.map((cartItem) =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );

   
    




  // return back cartitems with matching cart item with reduced quantity
}
 const clearCartItem=(cartItems,cartItemToClear)=>{
        return cartItems.filter(cartItem=>cartItem.id!==cartItemToClear.id);
    }
// Context
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart:()=>{},
  cartCount: 0,
  cartTotal:0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  
  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
 const cartTotal = cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  const addItemToCart = (productToAdd) => {
    setCartItems(prev=>addCartItem(prev, productToAdd));
  };

  const removeItemFromCart = (productToRemove) => {
    setCartItems(prev=>removeCartItem(prev, productToRemove));
  };

   const clearItemFromCart = (cartItemToClear) => {
    setCartItems(prev=>clearCartItem(prev,cartItemToClear));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    cartCount,
    cartTotal,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};