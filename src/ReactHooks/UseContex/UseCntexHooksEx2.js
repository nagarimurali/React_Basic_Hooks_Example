import React from 'react';
import { useContext } from 'react';
import { UserDataContext } from '../../context/useContexProps';

const UseCntexHooksEx2 = () => {

  let propsData=useContext(UserDataContext)
  return (
    <div>
      
      I am UseContext Hook2
      <h1>{propsData}</h1>
    </div>
  )
}

export default UseCntexHooksEx2
