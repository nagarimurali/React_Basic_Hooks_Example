import React from 'react'
import { Link,Outlet } from 'react-router-dom'

const Project = () => {
  return (
    <div>
        <nav>
        {/* project/new */}
            <Link to='/project/feture' style={{margin:"15px"}}>Future</Link>
            <Link to='/project/new'>New</Link>
        </nav>
      <Outlet/>
    </div>
  )
}

export default Project
