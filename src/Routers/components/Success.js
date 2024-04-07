import React from 'react'
import {useNavigate} from 'react-router-dom'

const Success = () => {
    const navigate=useNavigate();
  return (
    <div>
      <h1 style={{background:"green" ,color:'white'}}>✔️ Successfuly complitate</h1>
      <button style={{display:'flex',textJustify:"center"}} onClick={()=>navigate('/')}>Go to Home</button>
    </div>
  )
}

export default Success
