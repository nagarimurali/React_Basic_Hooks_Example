import React from 'react'
import UseCntexHooksEx2 from './UseCntexHooksEx2'

const UseCntexHooksEx1 = (props) => {
  return (
    <div>
      I am UseContext Hook1
      <UseCntexHooksEx2 data={props.data}/>
    </div>
  )
}

export default UseCntexHooksEx1
