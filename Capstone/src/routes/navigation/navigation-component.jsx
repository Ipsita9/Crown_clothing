import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import CrwnLogo from "../../assets/crwn.png";
import "./navigation.style.scss";
import CartIcon from "../../component/card-icon/card-icon.component";
import CartDropdown from "../../component/cart-dropdown/cart-dropdown.component";

import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";
import { signOutUser } from "../../routes/utils/firebase/firebase-util";

import SignIn from "../authentication/authentication.component";
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  console.log("NAV isCartOpen:", isCartOpen);
  const signOutHandler = async () => {
    await signOutUser();
  };

  console.log(currentUser);

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src={CrwnLogo} alt="logo" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              Sign Out
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              Sign In
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}

        {/* If isCartOpen is true, show <CartDropdown />.
If isCartOpen is false, show nothing. */}
      </div>
        
      {/* 👇 IMPORTANT: Without this, children routes will never show */}
      <Outlet />
    </>
  );
};

export default Navigation;
