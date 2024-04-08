import React, { useState } from 'react';
import { useAuth } from './auth';
import { useNavigate } from 'react-router-dom'
const Loing = () => {
    const { login } = useAuth();

    const [name, setName] = useState('');
    const navigate=useNavigate();
    return (
        <div>
            <h1>Login </h1>
            <label>User Name</label>
            <input type='text' name='name' id='name'
                onChange={(e) => setName(e.target.value)}
                value={name}
                placeholder='Enter user name' />

            <button onClick={() =>{
                 login(name)
                 navigate('/',{replace:true})
                 }}>Login</button>

        </div>
    )
}

export default Loing
