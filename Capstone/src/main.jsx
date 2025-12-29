import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { UserProvider } from "../src/context/user.context.jsx";
import { BrowserRouter } from "react-router-dom";
import { ProductsProvider} from "../src/context/product.context.jsx";
import { CartProvider } from  "../src/context/cart.context.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductsProvider>
          <CartProvider>
              <App />
          </CartProvider>
             
        </ProductsProvider>
         {/* for accessing the context values in the entire app */}
       
      </UserProvider>
    </BrowserRouter>
  </StrictMode>
);
