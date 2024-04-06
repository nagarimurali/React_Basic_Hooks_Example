import React from 'react'
import Eanhance from './Eanhance'

const Final = (props) => {
  
  return (
    <div>
        <button onClick={props.increment}>Increasing count value:{props.count}</button>
      
    </div>
  )
}

export default Eanhance(Final)
