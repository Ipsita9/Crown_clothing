import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";


import {
  getCurrentUser,
} from "./routes/utils/firebase/firebase-util";
// import{createAction} from "./routes/utils/reducer/reducer.utils";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Home from "/src/routes/home/home.component";
import Navigation from "./routes/navigation/navigation-component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "../src/routes/shop/shop.component";
import CheckoutPage from "../src/routes/checkout/checkout.component";
import { checkUserSession } from "./store/user/user.action";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
   
      dispatch(checkUserSession());
    },[dispatch]);
   

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} /> {/* <-- default page */}
        <Route path="home" element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<CheckoutPage />} />
      </Route>
    </Routes>
  );
};

export default App;
