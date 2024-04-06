import React from 'react'
import { useState ,useMemo,useEffect} from 'react'

const UseMemoHook = () => {

    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);

    const themeColor =useMemo(()=>{
        return {
            background: dark ? 'White' : "black",
            color: dark ? 'black' : 'white'
        }
    
    },[dark]) 
    useEffect(()=>{
    console.log("Theme changed");    
    },[themeColor])
    const doubleValue=useMemo(()=>{
      return  slowFunction(number)
    },[number])
  

    return (
        <div style={{ textAlign: "center" }}>
            <div>
                <input type='number' value={number} onChange={(e) => setNumber(e.target.value)} />
            </div>
            <br />
            <div>
                <button onClick={() => setDark(!dark)}>Change Theme</button>
            </div>
            <br />
            <h2 style={themeColor}>Change the Number{doubleValue}</h2>
        </div>
    )

    function slowFunction(number){
        // alert("only change number");
        for(let i=0; i<=1000000;i++){}
        console.log("number changed");
        return number*2
       
    }
}

export default UseMemoHook
