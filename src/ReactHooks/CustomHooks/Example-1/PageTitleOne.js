import React ,{useState}from 'react'
import usePageTite from '../CreateCustomehoks/usePageTite';

const PageTitleOne = () => {
    const[count,setCount]=useState(0);
    usePageTite(count)
  return (
    <div>
      <button onClick={()=>setCount(count+1)}>{`Count- ${count}`}</button>
    </div>
  )
}

export default PageTitleOne
