import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener,createUserDocumentFromAuth } from "../routes/utils/firebase/firebase-util";
 

// default value (fallback only)
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {

      if(user){
         createUserDocumentFromAuth(user);
      }
      console.log("Auth state changed:", user);
      setCurrentUser(user); // 🔥 THIS IS THE KEY
    });

    return unsubscribe; // cleanup listener
  }, []);

  const value = { currentUser, setCurrentUser };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};
