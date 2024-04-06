import React from 'react'
import { useFechData } from '../CreateCustomehoks/useFechData';
const URL = 'https://jsonplaceholder.typicode.com/users';


const FirstApi = () => {
   const[userData,loading,isError]= useFechData(URL)

  
if(loading){
    return <h1>Loading...</h1>
}
if(isError){
    return <h1>Something was happened</h1>
}
    return (
        <div>
            <ul>
                {userData && userData.length>0 &&userData.map((eachItem)=>{
                   const{id,name,email}=eachItem
                   return(
                        <li key={id}>
                            <h4>{name}</h4>
                            <p>{email}</p>
                        </li>
                    )
                }) }
            </ul>
        </div>
    )
}
export default FirstApi
