import React from 'react'
import { useState } from 'react'

const UseStateBoolean = () => {
    const [data, setData] = useState([{
        id: 1,
        text: "Task1",


    },
    {
        id: 2,
        text: "Task2",

    }
    ])
    const [inputValue, setInputValue] = useState({
        id: "",
        text: "",
    })
    const[edit,setEdit]=useState(false);
   
    //Add
    const handleSave = () => {
        setData([...data, {
            id: new Date().getTime().toString(),
            text: inputValue.text
        }]);
        setInputValue({
            id: "",
            text: ""
        })


    }
    // Delete 
    const handleDelete = (id) => {
        const filterData = data.filter((eachItem) => eachItem.id !== id);
        setData(filterData)


    }
    //Edit
    const handleEdit=(id)=>{
        setEdit(true);
        const findData=data.find((item)=>item.id===id);
        console.log("findData",findData)
        setInputValue({
            id:findData.id,
            text:findData.text
        });

    };
    const handleupdate=()=>{
        const Update=data.map((item)=>(
            item.id===inputValue.id ?{...inputValue,text:inputValue.text}:item
        ));
        setData(Update);

        setInputValue({
            id: "",
            text: ""
        });
        setEdit(false);

    }


    return (

        <div className='app'>
            <div style={{ marginBottom: "2px" }}>

                <input type='text' placeholder='Enter the Task' value={inputValue.text}
                    onChange={(e) => setInputValue({
                        ...inputValue, text: e.target.value
                    })}
                /> &nbsp;
                {edit? <button onClick={handleupdate}>Update</button>: <button onClick={handleSave}>Add</button>}
               
                <hr />

            </div>
            <ul>
                {
                    data && data.length > 0 && data.map((eachItem) => <li key={eachItem.id}>{eachItem.text}&nbsp;
                        <button onClick={()=>handleEdit(eachItem.id)}>Edit</button>&nbsp;
                        <button onClick={() => handleDelete(eachItem.id)}>Delete</button></li>)
                }
            </ul>
        </div>




    )
}

export default UseStateBoolean
