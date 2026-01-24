import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation-component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import CheckoutPage from "./routes/checkout/checkout.component";

import { setCurrentUser } from "./store/user/user.reducer";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./routes/utils/firebase/firebase-config";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      const pickUser =
      user && (({ accessToken, email }) => ({ accessToken, email }))(user);
      dispatch(setCurrentUser(pickUser));
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<CheckoutPage />} />
      </Route>
    </Routes>
  );
};

export default App;
