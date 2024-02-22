import React, { createContext, useContext,useEffect } from "react";
import StorageService from './../../services/token-service'
const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);

  const login = (user) => {
    StorageService.setToken(user)
    setUser(user)
  };
  useEffect(() => {
    
  }, [user])

  const getUser = () =>{
    return StorageService.getToken()
  }
  
  const logout = () => {
    debugger;
    StorageService.removeToken()
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, getUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
