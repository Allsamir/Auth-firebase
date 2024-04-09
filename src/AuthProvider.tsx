import {
  createUserWithEmailAndPassword,
  UserCredential,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  User,
  signOut,
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
}

const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const createUser = (
    email: string,
    password: string
  ): Promise<UserCredential> => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const singInUser = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("CurrentUser", user);
      setUser(user);
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
