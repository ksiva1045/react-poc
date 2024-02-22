import React from "react";
import { useAuth } from "./AuthProvider";
import { Navigate } from "react-router-dom";

function RequireAuth({ children }) {
  const auth = useAuth();
  const token =  auth.getUser();
  if (!token) {
    return <Navigate to="/smvalidation/login" />;
  }
  return children;
}

export default RequireAuth;
