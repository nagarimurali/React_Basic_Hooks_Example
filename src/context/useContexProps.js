import React from "react";

const data="TestUser"

export const UserDataContext=React.createContext();


const UserDataContextProvider=({children})=>{

    return(
        <UserDataContext.Provider value={data}>{children}</UserDataContext.Provider>

    )

}
export default UserDataContextProvider