
import React from 'react'
import { useState, useEffect } from 'react'

const apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const UseEeffectFirstExam = () => {
    const [drinksData, setDrinksData] = useState([]);
    const [searchItem, setSearchItem] = useState("")
    const [loder, setLoder] = useState(false);
    const[isError,setIsError]=useState({
        status:false,
        msg:""
    })
    const feachDrinkData = async (url) => {
        setLoder(true);
        setIsError({
            status:false,
            msg:""
        })

        try {
            const responce = await fetch(url);
            const { drinks } = await responce.json();
            console.log("data", drinks)
            setDrinksData(drinks);
            setLoder(false);
            setIsError({
                status:false,
                msg:""
            });
            if(!drinks){
                throw new Error("Data not found");
            }

        } catch (error) {
            console.error(error);
            setLoder(false);
            setIsError({
                status:true,
                msg:error.message||"something went worng..."
            })

        }


    }

    // useEffect(() => {
    //     const basiUrl = `${apiUrl}${searchItem}`
    //     feachDrinkData(basiUrl)

    // }, [searchItem])


useEffect(()=>{
    
})


    return (

        <>


            <div>
                <form style={{ padding: "5px" }}>
                    <div style={{ textAlign: "center", marginBottom: "4px" }}>
                        <input type="text" placeholder='Search the drinks...'
                            value={searchItem}
                            onChange={(e) => setSearchItem(e.target.value)}
                            style={{
                                width: "300px",
                                padding: "7px",
                                border: "1px solid",
                                borderRadius: "5px"
                            }} />
                    </div>
                    <hr />
                </form>

                {loder&& <h2 style={{textAlign:"center"}}>Loading...</h2>}
                {isError?.status&& <h2 style={{textAlign:"center",color:"red"}}>{isError.msg}</h2>}


                {!loder && !isError?.status &&<ul className='cocktail-data'>
                    {drinksData && drinksData.length > 0 && drinksData.map((eachItem) => {
                        const { idDrink, strDrink, strDrinkThumb } = eachItem
                        return (
                            <li key={idDrink} >
                                <div>
                                    <img src={strDrinkThumb} alt={strDrink} />
                                </div>
                                <div>
                                    <h3 style={{ textAlign: "center" }}>{strDrink}</h3>
                                </div>
                            </li>
                        )
                    })}
                </ul>
                }
            </div>

        </>
    )

}
export default UseEeffectFirstExam


/*
Usestate Use in Example code
-----------------------------
   const[count,setCount]=useState(0);
    const[show,setShow]=useState(false)
    useEffect(()=>{
        console.log("I am from UseEffect",count)
    },[count,show])
  return (
    <div className='app'>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>Click</button>
     <div>
     <h3 onClick={()=>setShow(!show)}>{show?"open":"close"}</h3>
     </div>
    </div>
  )
*/
/*
UseState use In Example 2
-----------------------------
const apiUrl = "https://jsonplaceholder.typicode.com/users";


    const [userData, setUserData] = useState([]);
    const [loader, setLoader] = useState(false);
    const [isError, setIsError] = useState({
        status: false,
        message: ""
    })
    const fecthUserData = async (url) => {
        setLoader(true);
        setIsError({ status: false, message: "" });
        try {
            const responce = await fetch(url);
            const data = await responce.json();
            setUserData(data);
            setLoader(false);
            setIsError({ status: false, message: "" });
            console.log("responce", responce.status)
            if (responce.status === 404) {
                throw new Error("No data fond")

            }



        } catch (error) {
            console.error(error);
            setLoader(false);
            setIsError({ status: true, message:error.message|| "Something went worng" })

        }


    }

    useEffect(() => {
        fecthUserData(apiUrl)

    }, []);

    if (loader) {
        return (
            <div className='app'>
                <h3>Loading...</h3>
            </div>
        )
    };
    if (isError?.status) {
        return (
            <div className='app' style={{ color: "red" }}>
                {isError.message}

            </div>
        )
    }


    return (
        <div className='app'>
            <h1>UseEeffectFirstExam</h1>
            <ul>
                {
                    userData && userData.length > 0 && userData.map((eachItem) => {
                        const { id, name, email } = eachItem
                        return (
                            <li key={id}>
                                <div>{name}</div>
                                <div>{email}</div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
 */