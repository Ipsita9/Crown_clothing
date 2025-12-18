import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import SignIn from "../../sign-in/sign-in.component";

const firebaseConfig = {
  apiKey: "AIzaSyAQL2WoAvtDMBjuM-JilDLGS4xUrGm1ExQ",
  authDomain: "ecommersapp-f901f.firebaseapp.com",
  projectId: "ecommersapp-f901f",
  storageBucket: "ecommersapp-f901f.firebasestorage.app",
  messagingSenderId: "203061338614",
  appId: "1:203061338614:web:2730332890e1a325f867d7",
  measurementId: "G-DMXQ2KVNDK",
};
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());



  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};
