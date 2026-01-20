import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQL2WoAvtDMBjuM-JilDLGS4xUrGm1ExQ",
  authDomain: "ecommersapp-f901f.firebaseapp.com",
  projectId: "ecommersapp-f901f",
  storageBucket: "ecommersapp-f901f.appspot.com",
  messagingSenderId: "203061338614",
  appId: "1:203061338614:web:2730332890e1a325f867d7",
};

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
