import React from 'react'
import { useState, useEffect } from 'react'

let apiUrl = "https://jsonplaceholder.typicode.com/users";


const InterviewQuestion = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("")
    const fetchData = async () => {
        try {
            const responce = await fetch(apiUrl);
            const userData = await responce.json();
            setData(userData)
            console.log(userData);

        } catch (error) {
            console.error(error);

        }

    }
    const handleDelete = (id) => {
        const deleteUserData = data.filter((item) => item.id !== id);
        setData(deleteUserData)

    }

    useEffect(() => {
        fetchData();
    }, []);
    const handleChange = (e) => {
        let searchItem = e.target.value;
        setSearch(searchItem)
        if (searchItem === '') {
            console.log("no");
            fetchData();

        }
        else {
           
            const filterValue = data.filter((userName) => userName.name.toLowerCase().includes(searchItem.toLowerCase()));
            console.log(filterValue);
            setData (filterValue)
        }

    }
  
    return (
        <>
            <input type="text" value={search} onChange={handleChange} placeholder='Search...' />
            <hr/>
            <br />
           {data.length===0 && <div>No user</div>}
            <div>
                {data && data.map((user) => (
                    <div key={user.id} style={{ border: "1px solid red", width: "500px" }}>
                        <h6>{user.name}</h6> <span><button onClick={() => handleDelete(user.id)}>Delete</button></span>

                    </div>
                ))}
            </div>
        </>

    )
}

export default InterviewQuestion
