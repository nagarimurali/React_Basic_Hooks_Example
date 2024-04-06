import React,{useState}from 'react'
import usePageTite from '../CreateCustomehoks/usePageTite'

const PageTitleTwo = () => {
  const[count,setCount]=useState(1);
  usePageTite(count)
  return (
    <div>
      <button onClick={()=>setCount(count+1)}>count:{count}</button>
    </div>
  )
}

export default PageTitleTwo
