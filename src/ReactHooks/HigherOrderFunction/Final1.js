import React from 'react'
import Eanhance from './Eanhance';
const Final1 = (props) => {
  return (
    <div>
        <span onMouseOver={props.increment}>Increasing count value:{props.count}</span>
      
    </div>
  )
}

export default Eanhance(Final1);
