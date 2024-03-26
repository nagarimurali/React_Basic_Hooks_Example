// import { error } from 'console';
import React from 'react'
import { useReducer, useEffect, useState } from 'react'
import { useContext } from 'react'
import { Mode } from '../../context/modeContext'

const reducer = (state, action) => {
    if (action.type === "UPDATE_USER_DATA") {
        return {
            ...state,
            userData: action.payload
        }
    };
    if (action.type === "USER_DELETE") {
        const filterUser = state.userData.filter((item) => item.id !== action.payload);
        console.log(filterUser);
        return {
            ...state,
            userData: filterUser,
        };

    }
    if (action.type === 'LOADING') {
        return {
            ...state,
            isLoading: action.payload
        }
    }
    if (action.type === 'USER_EDIT') {

        return {
            ...state,
            isEditing: action.payload
        }

    }

    if (action.type === "USER_UPDATE") {
        //alert(1)

        const updateUser = state.userData.map((item) => {
            if (item.id === action.payload.id) {
                // alert(2)
                return {
                    id: action.payload.id,
                    name: action.payload.name,
                    email: action.payload.email
                }

            } else {
                return item
            }

        });
        // console.log("updateUser", updateUser);

        return {
            ...state,
            userData: updateUser
        }

    }
    if (action.type === "ERROR") {

        return {
            ...state,
            isError: action.payload
        }
    }

    return state;


}

const apiUrl = "https://jsonplaceholder.typicode.com/users"
const UseReduceHookExample2 = () => {

    const fecthUserData = async (url) => {
        dispatch({ type: 'LOADING', payload: true });
        dispatch({ type: 'ERROR', payload: { status: false, msg: "" } })
        try {
            const responce = await fetch(url);
            if (!responce.ok) {
                throw new Error(`HTTP error! Status: ${responce.status}`);
            }
            const data = await responce.json();
            console.log("data", data);
            if (data === null) {
                throw new Error("Data is null");

            } else {
                dispatch({ type: 'UPDATE_USER_DATA', payload: data });

            }




            dispatch({ type: 'ERROR', payload: { status: false, msg: "" } });
            dispatch({ type: 'LOADING', payload: false });


        } catch (error) {

            console.log(error);
            dispatch({ type: 'ERROR', payload: { status: true, msg: error.message || "Data not fond" } });
            dispatch({ type: 'LOADING', payload: false });

        }
    }


    useEffect(() => {
        fecthUserData(apiUrl)

    }, [])


    const initialState = {
        userData: [],
        isLoading: false,
        isError: { status: false, msg: "" },
        isEditing: { status: false, id: '', name: '', email: '' }


    }
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleDelete = (id) => {
        dispatch({ type: 'USER_DELETE', payload: id })

    }
    const handleEdit = (id, name, email) => {

        dispatch({ type: "USER_EDIT", payload: { status: true, id: id, name: name, email: email } })

        console.log("state23", state);
    }
    const updateData = (id, name, email) => {
        console.log(name, email, id);
        dispatch({ type: "USER_UPDATE", payload: { id, name, email } });
        dispatch({ type: "USER_EDIT", payload: { status: false, id: "", name: "", email: "" } })



    }


    const mode = useContext(Mode);
   


    return (
        <div style={{ textAlign: "center", display: 'grid', margin: 'auto', width: "300px" }}>
            <h1>{mode.theme}</h1>
            <button onClick={mode.toggleTheme}>Mode</button>
            <div style={{backGround:"#000"}}>
                <h1>Users Details</h1>
                {state.isError?.status && <h1 style={{ color: "red" }}>{state.isError.msg}</h1>}
                {state.isEditing?.status && <EditForm id={state.isEditing.id} comingTitle={state.isEditing.name}
                    comingEmail={state.isEditing.email}
                    updateData={updateData} />}
                {state.isLoading && <h1>Loading...</h1>}
                {state.userData && state.userData.length > 0 && state.userData.map((item) => {
                    console.log("item", item);
                    const { id, name, email } = item
                    return (
                        <div key={id} style={{ background: "lightblue", margin: "2px", padding: "4px" }}>
                            <h3>{name}</h3>
                            <p style={{ paddingBottom: "3px" }}>{email}</p>
                            <button onClick={() => handleDelete(id)}>Delete</button> &nbsp;
                            <button onClick={() => handleEdit(id, name, email)}>Edit</button>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

const EditForm = ({ id, comingTitle, comingEmail, updateData }) => {
    const [title, setTitle] = useState(comingTitle || "");
    const [email, setEmail] = useState(comingEmail || "");
    return (
        <>
            <input name="name" placeholder='Enter the name' value={title} onChange={(e) => setTitle(e.target.value)} style={{ margin: "2px", padding: "5px" }} />

            <input name="name" placeholder='Enter the name' value={email} onChange={(e) => setEmail(e.target.value)} style={{ margin: "2px", padding: "5px" }} />

            <button onClick={() => updateData(id, title, email)}>Update</button>
        </>
    )
}

export default UseReduceHookExample2
