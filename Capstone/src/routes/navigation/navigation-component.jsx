import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";

import CrwnLogo from "../../assets/crwn.png";
import CartIcon from "../../component/card-icon/card-icon.component";
import CartDropdown from "../../component/cart-dropdown/cart-dropdown.component";

import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
// import { signOutUser } from "../../routes/utils/firebase/firebase-util";
import { signOutStart } from "../../store/user/user.action.js";

import {
  NavigationContainer,
  LogoContainer,
  Img,
  NavLinks,
  NavLink,
} from "./navigation.style.jsx";

const Navigation = () => {
  const dispatch=useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutUser=()=>dispatch(signOutStart());

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const signOutHandler = async () => {
    await signOutUser();
  };

  return (
    <>
      <NavigationContainer className={isScrolled ? "scrolled" : ""}>
        <LogoContainer to="/">
          <Img src={CrwnLogo} alt="logo" />
        </LogoContainer>

        <NavLinks>
          <NavLink to="/shop">Shop</NavLink>

          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              Sign Out
            </span>
          ) : (
            <NavLink to="/auth">Sign In</NavLink>
          )}

          <CartIcon />
        </NavLinks>

        {isCartOpen && <CartDropdown />}
      </NavigationContainer>

      <Outlet />
    </>
  );
};

export default Navigation;
