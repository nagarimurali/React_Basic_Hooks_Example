import React, { useEffect, useState } from 'react'
import './../../Styles/FinalUseEffect.css'

const FinalUseEffectEx = () => {
    const apiUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
    const [drinksData, setDrinksData] = useState([]);
    const [loading, setloading] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const [isError, setIsError] = useState({ isStatus: false, msg: "" });

    const fetchingData = async (url) => {
        setloading(true);
        setIsError({ isStatus: false, msg: "" });

        try {
            const response = await fetch(url);
            console.log('response', response);
            const { drinks } = await response.json();
            // if (!drinks) {
            //     throw new Error("No data found")
            // }
            // const data=response.json()
            console.log('data', drinks);
            setDrinksData(drinks);
            setloading(false);
            setIsError({ isStatus: false, msg: "" });
            if(!drinks){
                throw new Error("Data Not Found ")
            }
        } catch (error) {
            console.error("Error", error);
            setloading(false);
            setIsError({ isStatus: true, msg: error.message || "something went worng..." });
        }

    }

    useEffect(() => {
        let basicUrl = `${apiUrl}${searchValue}`
        console.log("basicUrl", basicUrl);
        fetchingData(basicUrl)
    }, [searchValue]);


    return (

        <>
       
            <div className='searchBox'>
                <input type="text" placeholder='Search...' name="searchValue" value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)} />

            </div>
            <hr />
            {loading && <h4>Loading...</h4>}

            
            {isError?.isStatus && <h4 style={{ color: "red" }}>{isError.msg}</h4>}
            <div className='row'>
                {drinksData&&drinksData.length>0&&drinksData.map((items) => {
                    const { strDrinkThumb, idDrink, strDrink } = items
                   
                

                    return (
                        <div className='card col' key={idDrink}>
                            <img src={strDrinkThumb} alt={strDrink} />

                            <div className="container">
                                <h4>
                                    <b>{strDrink}</b>
                                </h4>
                            </div>
                        </div>

                    )
                })}


            </div>
        </>
    )
}

export default FinalUseEffectEx






