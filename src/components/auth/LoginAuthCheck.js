import React from "react";
import { useAuth } from "./AuthProvider";
import { Navigate } from "react-router-dom";

function LoginAuthCheck({ children }) {
  const auth = useAuth();
  const token =  auth.getUser();
  if (!token) {
    return children;
  } else {
    return <Navigate to="/smvalidation/home" />;
  }
 
}

export default LoginAuthCheck;
