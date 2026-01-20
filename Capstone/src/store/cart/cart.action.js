import { CART_ACTION_TYPES } from "./cart.type";
import { createAction } from "../../routes/utils/reducer/reducer.utils";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    item => item.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map(item =>
      item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToRemove) => {
  const existingCartItem = cartItems.find(
    item => item.id === productToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(item => item.id !== productToRemove.id);
  }

  return cartItems.map(item =>
    item.id === productToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};

const clearCartItem = (cartItems, productToClear) =>
  cartItems.filter(item => item.id !== productToClear.id);


export const setIsCartOpen=(boolean)=>{
   return createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN,boolean)
}
 export const addItemToCart = (cartItems, productToAdd) =>{
   const newCartItems=addCartItem(cartItems,productToAdd);
   return createAction(CART_ACTION_TYPES.SET_CART_ITEMS,newCartItems);
 }

 export const removeItemFromCart = (cartItems, cartItemToRemove) =>{
   const newCartItems=removeCartItem(cartItems,cartItemToRemove);
   return createAction(CART_ACTION_TYPES.SET_CART_ITEMS,newCartItems);

 }
 export const clearItemFromCart = (cartItems, cartItemToclear) =>{
  const newCartItems = clearCartItem(cartItems,cartItemToclear);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS,newCartItems);

 }