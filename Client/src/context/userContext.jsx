import React from "react";
import {createContext, useState,useEffect } from "react";
import axios from "axios";

export const UserContext = createContext();
const UserProvider = ( {children} ) => {
    const ApiUrl = import.meta.env.VITE_REACT_APP_API_URL;
    const ReactUrl = import.meta.env.VITE_REACT_APP_API_REACT_URL;

    const [user ,setUser] = useState({})

    const fetchProtectedData = async () => {
        try {
          const token = localStorage.getItem("auth");
          if (token) {
            const response = await axios.get(`${ApiUrl}/userData`, {
              headers: {
                Authorization: token,
              },
            });
            console.log(response.data);
            setUser(response.data)
          }
        } catch (error) {
          console.error(error);
          localStorage.removeItem("auth");
          window.location.href = ReactUrl;
        } finally {
          // console.log(false);
        }
      };

      useEffect(()=>{
        if(localStorage.auth !== undefined){
          fetchProtectedData()
        }
      },[])
     

  return (
        <>
            <UserContext.Provider
                value={{
                    user,setUser,
                }}
            >
                {children}
            </UserContext.Provider>
        </>
    )
};
 export default UserProvider;