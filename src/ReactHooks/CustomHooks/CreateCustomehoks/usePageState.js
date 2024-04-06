import {useState} from 'react'

export const usePageState = (initialval=0) => {
    const [count,setCount]=useState(initialval);

    const increment=()=>{
        setCount(count+1);
    }
    const decrement=()=>{
        setCount(count-1);
    }
    const reset=()=>{
        setCount(initialval);
    }
    return[increment,decrement,reset,count]
}
