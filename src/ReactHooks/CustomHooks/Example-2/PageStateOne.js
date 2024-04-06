import React  from 'react'
import { usePageState } from '../CreateCustomehoks/usePageState'

const PageStateOne = () => {
    const[increment,decrement,reset,count]=usePageState(10)
  

  return (
    <div>
        <h1>Count==={count}</h1>
        <div>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            
            </div>
    </div>
   
  )
}

export default PageStateOne