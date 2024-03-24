import React from 'react'

export const Usercontext = React.createContext();

const data = {
    car: 'Scoda',
    powerStering: "yes"
}

export const UsercontextProvide = ({ children }) => {
    return (
        <Usercontext.Provider value={data}>{children}</Usercontext.Provider>
    )
}

