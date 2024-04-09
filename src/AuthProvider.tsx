import {
  createUserWithEmailAndPassword,
  UserCredential,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  User,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import React, { ReactNode, useContext, useEffect } from "react";
import { useState, createContext } from "react";
import { auth } from "./firebase/firebase.config";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextType {
  user: null | User;
  createUser: (email: string, password: string) => Promise<UserCredential>;
  singInUser: (email: string, password: string) => Promise<UserCredential>;
  logOut: () => Promise<void>;
  signInWithGoogle: () => Promise<UserCredential>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

const provider = new GoogleAuthProvider();

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const createUser = (
    email: string,
    password: string
  ): Promise<UserCredential> => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const singInUser = (email: string, password: string) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const signInWithGoogle = () => {
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("CurrentUser", user);
      setUser(user);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const contextValue: AuthContextType = {
    user,
    createUser,
    singInUser,
    logOut,
    loading,
    signInWithGoogle,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuth };
