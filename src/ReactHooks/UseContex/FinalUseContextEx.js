import React from 'react'
import { useContext } from 'react'
import { DisplayMode } from '../../context/displayMode'


const FinalUseContextEx = () => {
    const getMode=useContext(DisplayMode)
    console.log('getMode',getMode);
  return (
   <div className={`divTag  ${getMode.mode? "Dark":"Light"}`}>
     
    <nav>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contanct</li>
            <button onClick={getMode.modeChange}>{getMode.mode?"Light":"Dark"}</button>
        </ul>
    </nav>
   </div>
  )
}

export default FinalUseContextEx