import React from 'react'
import { useFechData } from '../CreateCustomehoks/useFechData';
const URL = 'https://jsonplaceholder.typicode.com/posts';


const SecondApi = () => {
   
    const[userData1,loading,isError]= useFechData(URL)


if(loading){
    return <h1>Loading...</h1>
}
if(isError){
    return <h1>Something was happened</h1>
}
    return (
        <div>
            <ul>
                {userData1 && userData1.length>0 &&userData1.map((eachItem)=>{
                   const{id,title}=eachItem
                   return(
                        <li key={id}>
                            <h4 style={{color:"red"}}>{title}</h4>
                          
                        </li>
                    )
                }) }
            </ul>
        </div>
    )
}
export default SecondApi
