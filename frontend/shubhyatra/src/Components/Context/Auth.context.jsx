import React from "react";
import { Navigate } from "react-router-dom";

export const AuthContext=React.createContext()

function AuthContextProvider({children}) {
    const [state,setState]=React.useState({
        isAuth:false,
        token:null,
        Name:null,
        email:null,
        ProdId:null
    })
    const login=(token,name,email)=>{
        setState({
           ...state,
           isAuth:true,
           token,
           name,
           email
        })
    }
    const handleProdId=(id)=>{
        setState({
            ...state,
            ProdId:id
        })
    }
    const logout=()=>{
        setState({
           ...state,
           isAuth:false,
           token:null,
           name:null,
           email:null
        })
    }
     return(
            <AuthContext.Provider value={{authState:state,login,logout,handleProdId}}>
                {children}
            </AuthContext.Provider>
     )
}

export default AuthContextProvider;