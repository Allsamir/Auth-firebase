import React, { ReactNode } from "react";
import { useAuth } from "./AuthProvider";
import { Navigate } from "react-router-dom";

interface Children {
  children: ReactNode;
}

const PrivateRoute: React.FC<Children> = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }

  if (user) {
    return children;
  }

  return <Navigate to={"/login"}></Navigate>;
};

export default PrivateRoute;
