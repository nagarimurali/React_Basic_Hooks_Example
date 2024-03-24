import React from 'react'
import { useState } from 'react'

const UseStateExample_1 = () => {
    const [list, setList] = useState([]);
    const [message, setMassage] = useState({
        id: "",
        text: ""

    });

    const [editing, setEditing] = useState({
        id: "",
        isEditing: false
    })

    const changeMessage = (e) => {
        setMassage({
            ...message, text: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let todoList = {
            id: new Date().getTime().toString(),
            text: message.text
        }

        setList([...list, todoList])
        setMassage({
            id: "",
            text: ""
        })

    }

    const handleDelete = (id) => {
        const filterList = list.filter((item) => item.id !== id);
        setList(filterList);
    }
    const handleEdit = (id) => {
        console.log("id", id)

        setEditing({
            ...editing,
            id: id,
            isEditing: true
        })
        let editeItem = list.find((item) => item.id === id)

        setMassage({
            ...message, id: editeItem.id, text: editeItem.text
        })

        console.log("editeItem", editeItem)


    }
    const handleEditSubmit = (e) => {
        e.preventDefault();
        let editTodoList = list.map((item) => {
            if (item.id === editing.id) {
                return (
                    {
                        id: editing.id,
                        text: message.text
                    }
                )

            } else {
                return item;
            }
        })
        setList(editTodoList);

        setEditing({

            id: "",
            isEditing: false

        })
        setMassage({
            id: "",
            text: ""
        })
    }

    return (
        <div className='app'>
            <form style={{ margin: "3px" }}>
                <input type='text' value={message.text} placeholder="Enter the Name" onChange={changeMessage} /> &nbsp;

                {editing.isEditing ? <button onClick={handleEditSubmit}>Edit</button> : <button onClick={handleSubmit}>Add</button>}


            </form>
            <hr />
            {list.length === 0 && <h4>No data</h4>


            }
            <ul>
                {
                    list.map((item) => (<li key={item.id}> {item.id}{item.text} &nbsp;
                        <button onClick={() => handleEdit(item.id)}>Edit</button> &nbsp;
                        <button onClick={() => handleDelete(item.id)}>Delete</button> </li>))
                }
            </ul>

        </div>
    )


}

export default UseStateExample_1

/*
// First Example
 const [count, setCount] = useState(0);
    const increment = () => {
        // setCount(count+1)
        // setCount(count+1)

        setCount((count) => count + 1);
        setCount(function (count) { parseInt(count + 1) });

    }
    const decrement = () => {
        setCount(count - 1)
        setCount(count - 1)
    }

    return (
        <div className="app">
            <button onClick={increment}>+</button>
            <span>{count}</span>
            <button onClick={decrement}>-</button>

        </div>
    )

*/

/*
//second example  objects

  const[data,setData]=useState({
        firstName:"Murali",
        lastName:"Nagari",
        age:24
    })
    const handleFirstname=()=>{
        setData({
            ...data,firstName:"Gopi"
        })

    }
    const handleLastName=()=>{
        setData({
            ...data,lastName:"Avala"
        })
    }

    return(
        <>
        <div>{data.firstName}</div>
        <button onClick={handleFirstname}>change FirstName</button>
        <div>{data.lastName}</div>
        <button onClick={handleLastName}>chane LastName</button>
        <div>{data.age}</div>

        </>
    )
second example Array
  const [data, setData] = useState([{
        id: 1,
        name: "Murali",
        age: 24
    }, {
        id: 2,
        name: "Prem",
        age: 23
    },
    {
        id: 3,
        name: "Prem",
        age: 23
    }])
    const handleDelete = (id) => {
        const filterData = data.filter((comesId) => comesId.id !== id)
        setData(filterData)

    }

    return (

        <ul>
            {data.map((item) => (
                <li key={item.id}>
                    <div>{item.id}</div>
                    <div>{item.name}</div>
                    <div>{item.age}</div>
                    <button onClick={() => handleDelete(item.id)}>Delete</button>
                </li>
            ))

            }
        </ul>

    )
    


*/

/*
useState third example boolean
const [show, setShow] = useState(false);

    const handleChange = () => {
        setShow(!show)
    }
    return (
        <div className='app'>
            <button onClick={handleChange}> {show ? 'Show' : 'Hide'}</button>

            {/* {show && <div className='app'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad m
            inim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>

        } *

//         {show ?<div className='app'>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
//         incididunt ut labore et dolore magna aliqua. Ut enim ad m
//         inim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
//     </div>:<div className='app'> Data is Hidden</div>

//     }
// </div>
// )
*/
/*
Main Example get input data

 const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleChangeName = (e) => {
        console.log("e", e)


        setName(e.target.value)


    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)

    }
    const handleChangePassword = (e) => {
        setPassword(e.target.value)

    }
    const handleSumbit = (e) => {
        e.preventDefault()

        const resultOutput = {
            name: name,
            email: email,
            password: password
        }
        console.log("resultOutput", resultOutput)


    }

    return (
        <div className='app'>
            <form onSubmit={handleSumbit}>
                <input type='text' value={name} placeholder="Enter the Name" onChange={handleChangeName} /><br />
                <input type='email' value={email} placeholder="Enter the Email" onChange={handleChangeEmail} /><br />
                <input type='password' value={password} placeholder="Enter the Password" onChange={handleChangePassword} /><br />
                <button>Submit</button>

            </form>

        </div>
    )

    //Second way of code changehandle input box

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
   
    const handleChange= (e,name) => {
       if(name==="name"){
        setName(e.target.value)
       }else if(name==="email"){
        setEmail(e.target.value)
       }else if(name==="password"){
        setPassword(e.target.value)
       }

    }
    const handleSumbit = (e) => {
       e.preventDefault();
        const resultOutput = {
            name: name,
            email: email,
            password: password
        }
        console.log("resultOutput", resultOutput)


    }

    return (
        <div className='app'>
            <form onSubmit={handleSumbit}>
                <input type='text' value={name} placeholder="Enter the Name" onChange={(e)=>handleChange(e,"name")} /><br />
                <input type='email' value={email} placeholder="Enter the Email" onChange={(e)=>handleChange(e,"email")} /><br />
                <input type='password' value={password} placeholder="Enter the Password" onChange={(e)=>handleChange(e,"password")} /><br />
                <button>Submit</button>

            </form>

        </div>
    )

 */


