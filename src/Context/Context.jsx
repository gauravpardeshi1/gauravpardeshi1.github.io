import { createContext,useState } from "react";


export const AuthContext=createContext()

function AuthContextProvider({children}) {
    const[state,setstate]=useState(false);
    
  const lightTheme=()=>{
    setstate(true)
  }
  const DarkTheme=()=>{
    setstate(false)
    
  }
    return(
        <AuthContext.Provider value={{state, lightTheme,DarkTheme}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;
