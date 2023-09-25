import React, { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const loginWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const authInfo = {
    createUser,
    loginUser,
    loginWithGoogle,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
