import React from 'react'

const TitleCom = () => {
    console.log('Title rendered');
  return (
    <h2>
      UseCallback and & React.memo
    </h2>
  )
}

export default React.memo(TitleCom)
