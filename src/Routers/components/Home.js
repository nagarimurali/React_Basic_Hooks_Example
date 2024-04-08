import React from 'react'
import {useNavigate} from 'react-router-dom'
import { useAuth } from './AuthFile/auth'

const Home = () => {
  const data=useAuth();

    const navigate=useNavigate();
    console.log("data",data);
  return (
    <div>
     <h1>Home</h1> 
     <button onClick={()=>navigate('/success')}>Go Success</button>
    </div>
  )
}

export default Home
