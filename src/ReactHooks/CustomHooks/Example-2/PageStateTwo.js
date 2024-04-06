import React from 'react'
// import {usePageState} from './../CreateCustomehoks/usePageState'
import { usePageState } from '../CreateCustomehoks/usePageState'
 const PageStateTwo = () => {
 const[increment,decrement,reset,count]=usePageState(0)

  return (
    <div>
        <h1>Count ==={count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}
export default PageStateTwo
