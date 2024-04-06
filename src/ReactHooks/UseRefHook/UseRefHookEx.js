import React from 'react'
import { useState, useRef } from 'react'

const UseRefHookEx = () => {
    const [name, setName] = useState("");
    const renderCount = useRef("")

    //     useEffect(()=>{
    //  renderCount.current=renderCount.current+1

    //     })

    const focusFun = () => {
        renderCount.current.focus()
    }
    return (
        <div style={{ marginTop: "5px" }}>
            <input ref={renderCount} type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
            <h1>Type:{name}</h1>
            <button onClick={focusFun}>Focus</button>
        </div>
    )
}

export default UseRefHookEx

/*

   const[name,setName]=useState("");
    const renderCount=useRef(1)

    useEffect(()=>{
 renderCount.current=renderCount.current+1
      
    })

  return (
    <div style={{marginTop:"5px"}}>
     <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
     <h1>Type:{name}</h1>
     <h1>Component {renderCount.current} times Rendering</h1>
    </div>
  )
*/