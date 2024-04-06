import React from 'react'

const ButtonCom = ({children,handleEvent}) => {
    console.log(`${children} rendered`);
  return (
    <div>
      <button onClick={handleEvent}>{children}</button>
    </div>
  )
}

export default React.memo(ButtonCom);
