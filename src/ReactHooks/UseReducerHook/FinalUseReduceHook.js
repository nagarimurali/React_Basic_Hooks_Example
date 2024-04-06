
import React, { useState } from 'react'
import { useReducer, useEffect } from 'react';


const apiUrl = "https://jsonplaceholder.typicode.com/users";

const reducer = (state, action) => {
    if (action.type === 'UPDATE_USERS') {
        return {
            ...state,
            userData: action.payload,

        }
    }

    if (action.type === 'ISLOADING') {
        return {
            ...state,
            isLoading: action.payload
        }
    }
    if (action.type === 'DELETE_USER') {

        let userDelete = state.userData.filter((item) => item.id !== action.payload)
        console.log(userDelete)


        return {
            ...state,
            userData: userDelete

        }
    }
    if (action.type === 'EDITE_USER') {



        return {
            ...state,
            isEdite: { status: action.payload.status, id: action.payload.id, name: action.payload.name, email: action.payload.email }
        }
    }
    if (action.type === 'UPDATE_USER') {
        console.log(action.payload);
        // alert(1)

        const userUpdate = state.userData.map((item) => {
           // alert(2)
            if (item.id === action.payload.id) {
                return {
                    id: action.payload.id,
                    name: action.payload.name,
                    email: action.payload.email

                }

            }
            else {
                return item
            }
        })


        return {
            ...state,userData : userUpdate
        }






    }
    return state;

}

const FinalUseReduceHook = () => {
    const initialState = {
        userData: [],
        isLoading: false,
        isError: { status: false, msg: '' },
        isEdite: { status: false, id: '', name: '', email: '' }
    }

    const [state, dispatch] = useReducer(reducer, initialState);


    const fetchUserData = async (URL) => {
        dispatch({ type: 'ISLOADING', payload: true })

        try {
            const response = await fetch(URL);
            const data = await response.json();

            dispatch({ type: 'UPDATE_USERS', payload: data });
            dispatch({ type: 'ISLOADING', payload: false });

        } catch (error) {
            dispatch({ type: 'ISLOADING', payload: false });



        }




    }

    useEffect(() => {
        fetchUserData(apiUrl)

    }, []);
    const handleDelete = (id) => {
        dispatch({ type: 'DELETE_USER', payload: id })
    }
    const handleEdit = (id, name, email) => {
        dispatch({ type: 'EDITE_USER', payload: {status:true, id, name, email } })


    }

    const handleUpdate = (id, name, email) => {
        dispatch({ type: 'UPDATE_USER', payload: { id, name, email } })
        dispatch({ type: 'EDITE_USER', payload: {status:false,id:'',name:'',email:'' } })
    }


    console.log("state", state);
    return (
        <div>
            <h1>User Details</h1>
            {state.isEdite.status && <div> <FormUserData id={state.isEdite.id} name={state.isEdite.name}
                email={state.isEdite.email} handleUpdate={handleUpdate} /></div>}

            {state.isLoading && <div>Loading...</div>}
            {
                state.userData && state.userData.map((item) => (
                    <div key={item.id} style={{
                        border: "1px solid green",
                        width: "300px"
                    }}>
                        <h3>{item.name}</h3>
                        <p>{item.email}</p>
                        <button onClick={() => handleEdit(item.id, item.name, item.email)}>Edit</button> &nbsp;
                        <button onClick={() => handleDelete(item.id)}>Delete</button>


                    </div>
                ))
            }


        </div>


    )

}

const FormUserData = ({ id, name, email, handleUpdate }) => {
    const [userName, setUserName] = useState(name || '')
    const [userEmail, setUserEmail] = useState(email || '')
    return (
        <>
            <input type='text' placeholder='name' value={userName} onChange={(e) => setUserName(e.target.value)} />
            <input type='text' placeholder='email' value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
            <button onClick={() => handleUpdate(id, userName, userEmail)}>Update</button>
        </>
    )
}


export default FinalUseReduceHook

/*
const reducer = (state,action) => {
    if(action.type==="DELETE_USER"){
        let filterUser=state.filter((user)=>user.id!==action.payLoad)
        console.log("filterUser",filterUser);
return filterUser;
    }
    else{
        return state;
    }

}

const FinalUseReduceHook = () => {
    const initialState = [
        {
            id: 1,
            name: "Murali",
            age: 24,
        },
        {
            id: 2,
            name: "Prem",
            age: 24,
        }
    ]
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleDelete=(id)=>{
        dispatch(
            {
                type:"DELETE_USER",
                payLoad:id
            }
        )


    }
    return (
        <div>

            <h1>My details</h1>
            {state && state.length > 0 && state.map((user) => (
                <div key={user.id}>
                    <h3>{user.name}</h3>
                    <p>{user.age}</p>
                    <button onClick={()=>handleDelete(user.id)}>Delete</button>
                </div>
            ))}

        </div>
    )
}

*/
