import {useEffect} from 'react'

const usePageTite = (count) => {
    useEffect(()=>{
        document.title=`Count-${count}`

    },[count])
  
}

export default usePageTite
