import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store/store.js";
import { PersistGate } from "redux-persist/integration/react";
import { persistor} from "./store/store";

import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "./routes/utils/stripe/stripe.utils.js";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
        
      <BrowserRouter>
       
        <Elements stripe={stripePromise}>
          <App />
        </Elements>
      </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

console.log("React version:", React.version);
