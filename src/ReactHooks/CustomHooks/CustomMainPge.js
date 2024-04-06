import React from 'react'
// import PageTitleOne from './Example-1/PageTitleOne'
// import PageTitleTwo from './Example-1/PageTitleTwo'

// import PageStateOne from './Example-2/PageStateOne'
// import PageStateTwo from './Example-2/PageStateTwo'

import FirstApi from './Example-3/FirstApi'
import SecondApi from './Example-3/SecondApi'

const CustomMainPge = () => {
  return (
    <div>
   <FirstApi/>
   <h1>Second Api Call</h1>
   <SecondApi/>
    </div>
  )
}

export default CustomMainPge
