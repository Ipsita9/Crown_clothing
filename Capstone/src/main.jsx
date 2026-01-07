import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { UserProvider } from "../src/context/user.context.jsx";
import { BrowserRouter } from "react-router-dom";
import { CategoriesProvider} from "../src/context/categories.context.jsx";
import { CartProvider } from  "../src/context/cart.context.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CategoriesProvider>
          <CartProvider>
              <App />
          </CartProvider>
             
        </CategoriesProvider>
         {/* for accessing the context values in the entire app */}
       
      </UserProvider>
    </BrowserRouter>
  </StrictMode>
);
