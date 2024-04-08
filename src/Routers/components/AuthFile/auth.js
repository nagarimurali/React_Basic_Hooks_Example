import React, { useContext, useState } from "react";

const AuthContext = React.createContext();

export const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const login = (userName) => {
        setUser(userName)
    }
    const logOut = () => {
        setUser(null)
    }
    return <AuthContext.Provider value={{ user, login, logOut }}>{children}</AuthContext.Provider>
}

export const useAuth=()=>{
    return useContext(AuthContext)
}