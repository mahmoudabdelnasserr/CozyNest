import { createContext, useEffect, useState } from "react";

export let UsersContext = createContext();

export default function UsersContextProvider({children}){

    const[userToken, setUserToken] = useState(null); 
    
    useEffect(() => {
        if(localStorage.getItem('token')){
            setUserToken(localStorage.getItem('token'));
        }
    }, []);

    function updateToken(newToken) {
        if (newToken) {
          localStorage.setItem("token", newToken);
          setUserToken(newToken);
        } else {
          localStorage.removeItem("token");
          setUserToken(null);
        }
      }
    

   
  
  


    return <UsersContext.Provider value={{userToken, setUserToken, updateToken}}>
        {children}
    </UsersContext.Provider>
}