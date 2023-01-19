import React from "react";

export const AuthContext=React.createContext()

function AuthContextProvider({children}) {
    const [state,setState]=React.useState({
        isAuth:false,
        token:null,
        Name:null
    })
    const login=(token,name)=>{
        setState({
           ...state,
           isAuth:true,
           token,
           name
        })
    }
    const logout=()=>{
        setState({
           ...state,
           isAuth:false,
           token:null,
           name:null
        })
    }
     return(
            <AuthContext.Provider value={{authState:state,login,logout}}>
                {children}
            </AuthContext.Provider>
     )
}

export default AuthContextProvider;