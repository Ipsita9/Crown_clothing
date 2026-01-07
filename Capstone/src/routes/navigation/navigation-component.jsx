import { Fragment, useContext ,useState,useEffect} from "react";
import { Link, Outlet } from "react-router-dom";
import CrwnLogo from "../../assets/crwn.png";

import CartIcon from "../../component/card-icon/card-icon.component";
import CartDropdown from "../../component/cart-dropdown/cart-dropdown.component";

import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";
import { signOutUser } from "../../routes/utils/firebase/firebase-util";

import SignIn from "../authentication/authentication.component";
import{NavigationContainer,LogoContainer, Img ,NavLinks,NavLink} from "./navigation.style.jsx";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  console.log("NAV isCartOpen:", isCartOpen);
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

  console.log(currentUser);

  return (
    <>
       <NavigationContainer className={isScrolled ? "scrolled" : ""}>
      <LogoContainer to="/">
        <Img src={CrwnLogo} alt="logo" />
      </LogoContainer>

      <NavLinks>
        <NavLink to="/shop">
          Shop
        </NavLink>

        {currentUser ? (
          <span className="nav-link" onClick={signOutHandler}>
            Sign Out
          </span>
        ) : (
          <NavLink to="/auth">
            Sign In
          </NavLink>
        )}

        <CartIcon />
      </NavLinks>

      {isCartOpen && <CartDropdown />}
    </NavigationContainer>

    {/* 👇 This is correct */}
    <Outlet />
  
      </>
  );
};

export default Navigation;
