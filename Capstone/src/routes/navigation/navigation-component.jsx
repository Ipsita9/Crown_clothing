import { Fragment } from "react/jsx-runtime";
import { Link, Outlet } from "react-router-dom";
import CrwnLogo from "../../assets/crwn.png";
import "./navigation.style.scss";
import SignIn from "../authentication/authentication.component";
const Navigation = () => {
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
          <Link className="nav-link" to="/auth">
            Sign In
          </Link>
        </div>
      </div>

      {/* 👇 IMPORTANT: Without this, children routes will never show */}
      <Outlet />
    </>
  );
};

export default Navigation;
