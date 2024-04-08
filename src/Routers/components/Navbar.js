import React from 'react';
import {NavLink} from 'react-router-dom'
import { useAuth } from './AuthFile/auth';


const Navbar = () => {
  const {user,logOut}=useAuth();
 
  return (
    <div className='primeNavBar'>
        <nav >
            <NavLink to='/'>Home</NavLink>
            <NavLink to='about'>About</NavLink>
            <NavLink to='contact'>Contact</NavLink>
            <NavLink to='project'>Project</NavLink>
            <NavLink to='users'>Users</NavLink>
            {
              user ?
              <NavLink  to='/logOut' onClick={logOut}>LogOut</NavLink>
              :<NavLink  to='/login'>Login</NavLink>
            }

        </nav>
      
    </div>
  )
}

export default Navbar
