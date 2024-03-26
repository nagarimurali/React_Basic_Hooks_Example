import  React from 'react'
import {useState } from 'react';

export const DisplayMode=React.createContext();

export const DisplayModeProvider=({children})=>{
   const [mode,setMode]=useState(()=>{
    const savedMode = localStorage.getItem('mode');
    return savedMode ? JSON.parse(savedMode) : false;
   });
   const modeChange=()=>{
    const newMode = !mode;
    alert(newMode);
    setMode(newMode);
    localStorage.setItem('mode', JSON.stringify(newMode))

   }

    return(
        <DisplayMode.Provider value={{mode,modeChange}}>{children}</DisplayMode.Provider>
    )
}