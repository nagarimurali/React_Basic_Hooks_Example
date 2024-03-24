import React from "react";
import { useState } from "react";

export const Mode= React.createContext();

export const ModeProvider=({children})=>{
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((pre)=>(pre==="light"?"dark":"light"))
    }

    return(
        <Mode.Provider value={{theme,toggleTheme}}>{children}</Mode.Provider>
    )
}

