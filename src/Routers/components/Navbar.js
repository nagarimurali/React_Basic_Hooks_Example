import React from 'react';
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='primeNavBar'>
        <nav >
            <NavLink to='/'>Home</NavLink>
            <NavLink to='about'>About</NavLink>
            <NavLink to='contact'>Contact</NavLink>
            <NavLink to='project'>Project</NavLink>

        </nav>
      
    </div>
  )
}

export default Navbar
