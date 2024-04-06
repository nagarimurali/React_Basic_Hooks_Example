
import React from 'react'
import { useEffect, useState } from 'react'



const UseEeffectExample4 = () => {

    const apiUrl = "https://fakestoreapi.cm/users";

    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(false);
    const [isError, setIsError] = useState({
        status: false,
        msg: ""
    })

    // const fetchData = async (URL) => {
    //     setLoader(true);
    //     setData([]);

    //     setIsError({ status: false, msg: "" })

    //     try {
    //         const responce = await fetch(URL)
    //         debugger;
    //         if (responce.status !== 200) {
    //             throw Error('No data found')
    //         }

    //         const apiData = await responce.json();

    //         console.log("apiData", apiData);
    //         setData(apiData);
    //         setLoader(false);
    //         setIsError({ status: false, msg: "" })

    //     } catch (error) {
    //         console.error(error);

    //         setLoader(false);
    //         setIsError({ status: true, msg: error.message })


    //     }


    // }


    const fetchData1 = (URL) => {
        fetch(URL).then(response=>response.json()).then(data=>setData(data)).catch(error=>console.error(error))
                  
    }

    useEffect(() => {
        //fetchData(apiUrl)
        fetchData1(apiUrl);

    }, [])

    return (
        <div>
            {loader && <h1>Loading..</h1>}

            {isError.status && <h1 style={{ color: "red" }}>{isError.msg}</h1>}
            <ul>
                {data && data.length > 0 && data.map((user) => {
                    const { id, username, email } = user


                    return (
                        <li key={id} style={{ border: "1px solid red", width: "300px" }}>
                            <div>{username}</div>
                            <div>{email}</div>

                        </li>

                    )
                })}
            </ul>



        </div>
    )
}

export default UseEeffectExample4
