import React, { useState } from 'react'
import "./../../Styles/FinalUseState.css"

const FinalUseState = () => {
    const [modal, setModal] = useState(false);
    const [user, setUser] = useState({
        id: '',
        name: "",
        mobile: 0
    })
    const [list, setList] = useState([
        {
            id: "1",
            name: "Murali",
            mobile: 89205723,
        },
        {
            id: "2",
            name: "Vijay",
            mobile: 9346274635,

        },
        {
            id: "3",
            name: "giri",
            mobile: 87979834,
        }
    ]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setUser({
            ...user, [name]: value
        })
        console.log(user);
    }
    const handleSave = (e) => {
        e.preventDefault();

        if (user.id) {
            let userUpdate = list.map((item) => item.id === user.id ? user : item);
            setList(userUpdate);

        } else {


            let newUserDetails = {
                id: new Date().getTime().toString(),
                name: user.name,
                mobile: user.mobile
            }
            setList([...list, newUserDetails]);



        }
        setModal(false);
        setUser(
            {
                id: '',
                name: "",
                mobile: 0
            }
        );


    }

    const handleDelete = (id) => {
        let remainUser = list.filter((users) => users.id !== id);
        setList(remainUser);

    }
    const handleEditi = (user) => {
        console.log(user);
        setModal(true);
        setUser({
            id: user.id,
            name: user.name,
            mobile: user.mobile
        })
    }
    return (
        <div className='app'>
            <button onClick={() => setModal(true)}>Add</button>
            {modal && <div className="modal-overlay">
                <div className="modal">
                    <h1 >{user.id ? 'Edit User' : "New details"}</h1>
                    <span className="close" onClick={() => setModal(false)}>&times;</span>
                    <form >
                        <input type='text' name='name' value={user.name} onChange={handleChange} className='m-3' placeholder='Enter the Name' />
                        <br />
                        <input type='number' name='mobile' value={user.mobile} onChange={handleChange} className='m-3' placeholder='Enter the Mobile NUmber' />
                        <br />
                        <button onClick={handleSave}>{user.id ? 'Update' : 'Save'}</button>
                    </form>
                </div>

            </div>
            }
            <hr />
            <div className='mt-2'>
                <ul>
                    {
                        list && list.length > 0 && list.map((user) => (
                            <li key={user.id}>
                                <div>
                                    <span>{user.id}</span>
                                    <h4> user Name: {user.name}</h4>
                                    <span>Mobile No: {user.mobile}</span>

                                </div>

                                <button className='m-3' onClick={() => handleDelete(user.id)}>Delete</button> &nbsp; <button onClick={() => handleEditi(user)}>Edit</button>
                            </li>
                        )


                        )
                    }
                </ul>
            </div>

        </div>
    )
}

export default FinalUseState
