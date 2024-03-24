import React from 'react'
 import { useContext } from 'react'
import { Usercontext } from '../../context/useContext'

const UseContexExample = () => {  
const data=useContext(Usercontext);
console.log("data",data);  
  return (
    <div>
     <h1>My Favorite Car is {data.car} </h1>
    </div>
  )
}


  




export default UseContexExample
