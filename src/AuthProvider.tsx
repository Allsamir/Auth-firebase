import React, { ReactNode, useContext } from "react";
import { useState, createContext } from "react";

interface AuthContextType {
  value: boolean;
  handleValue: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [value, setValue] = useState(false);

  const handleValue = () => {
    setValue(!value);
  };
  return (
    <AuthContext.Provider value={{ value, handleValue }}>
      {children}
    </AuthContext.Provider>
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
