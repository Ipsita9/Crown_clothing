import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import {
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

import { auth, db } from "./firebase-config";

/* GOOGLE SIGN IN */
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, provider);

/* FIRESTORE HELPERS */
export const getCategoriesAndDocument = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => doc.data());
};

/* USER HELPERS */
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalDetails = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;

    await setDoc(userDocRef, {
      displayName,
      email,
      createdAt: new Date(),
      ...additionalDetails,
    });

    // ✅ IMPORTANT: fetch snapshot again after creating user
    return await getDoc(userDocRef);
  }

  // ✅ return snapshot (NOT docRef)
  return userSnapshot;
};

/* AUTH HELPERS */
export const createAuthUserWithEmailAndPassword = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

export const signInAuthUserWithEmailAndPassword = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const signOutUser = () => signOut(auth);

/* PROMISE WRAPPER (for saga) */
export const getCurrentUser = () =>
  new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
