import { useEffect } from "react";
import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [services, setServices] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser]= useState("");
  const AuthorizationToken = `Bearer ${token}`



  const storeTokenInLS = (serverToken) => {
    setToken(serverToken)
    return localStorage.setItem("token", serverToken);

  };

  // logged in or not bolean value
  let isLoggedIn = !!token;
  console.log(isLoggedIn)
  // logout functonality
  const LogoutUser =() =>{
    setToken("");
    return localStorage.removeItem("token")
  }


  // JWT AUTHENTICATION- to get the curr logged in user data

  const userAuthentication = async()=>{
    try {
      const response = await fetch("http://localhost:5000/api/auth/user",{
        method: "GET",
        headers:{
          Authorization: AuthorizationToken,
          // Authorization: `Bearer ${token}`
        }
      });
      if(response.ok){
        const data = await response.json();
        console.log(data, "user data", data.userData)
        setUser(data.userData)
      }
      
    } catch (error) {
      console.log("Error fetching user data")
      
    }
  }



  useEffect(()=>{
    userAuthentication();
  },[])

  

  return (
    <AuthContext.Provider value={{isLoggedIn, storeTokenInLS, LogoutUser, user, AuthorizationToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth =()=>{
  const AuthContextValue =  useContext(AuthContext);
  if(!AuthContextValue){
    throw new Error("useAuth used outside of the provider");
  }

  return AuthContextValue;

}
