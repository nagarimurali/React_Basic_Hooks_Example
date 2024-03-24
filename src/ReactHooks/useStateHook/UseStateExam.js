import React from 'react'
import { useState } from 'react';

const UseStateExam = () => {

  const [inputValue, setInputValue] = useState({
    id: "",
    text: ""
  });

  const [data, setData] = useState([]);
  const [edit, setEdit] = useState(false)
  const handleChange = (e) => {
    console.log(e.target.value);
    setInputValue({
      ...inputValue, text: e.target.value
    })

  }
  const handleAdd = () => {
    setData([...data, {
      id: new Date().getTime().toString(),
      text: inputValue.text
    }]);
    setInputValue({
      id: '',
      text: ''
    })
  }
  const handleDelete = (selectId) => {
    const filterData = data.filter((eachItem) => eachItem.id !== selectId);
    setData(filterData)
  }
  const handleEdit = (selectId) => {
    setEdit(true)
    const findItem = data.find((eachItem) => eachItem.id === selectId);
    setInputValue({
      id: findItem.id,
      text: findItem.text

    })

    console.log("findItem", findItem);
  }
  const handleUpdate=()=>{

    const UpdateDate=data.map((item)=>(
      item.id===inputValue.id ?{...item, text:inputValue.text}:item
    ));
    setData(UpdateDate);
    setInputValue({
      id: '',
      text: ''
    });
    setEdit(false)

    console.log("UpdateDate",UpdateDate)
    

  }
  return (
    <div className='app'>
      <div style={{ marginBottom: "5px" }}>
        <input type="text" value={inputValue.text} onChange={handleChange} placeholder='Add the Task' /> &nbsp;
        {
          edit ? <button onClick={handleUpdate}>Update</button> : <button onClick={handleAdd}>Add</button>
        }

      </div>


      <hr />
      <h1>Todo List</h1>
      <ul>
        {
          data.map((eachItem, index) => (
            <li key={index} style={{ padding: "2px" }}> {eachItem.text} <button onClick={() => handleDelete(eachItem.id)}>Delete</button> &nbsp;
              <button onClick={() => handleEdit(eachItem.id)}>Edit</button>
            </li>

          ))
        }

      </ul>


    </div>
  )
}


export default UseStateExam

