import {useState,useEffect} from 'react'

export const useFechData = (URL) => {
    const [userData, setUserData] = useState([]);
    const [loading, setloading] = useState(false);
    const [isError, setIsError] = useState(false);

    const fechUserData = async (apiUrl) => {
        setloading(true);
        setIsError(false);

        try {
            const response = await fetch(apiUrl);
            if(response.status===404){
                throw new Error('Url Not match')
            }
            const data = await response.json();
            console.log("response",response);

            console.log("data",data);
            setUserData(data)
            setloading(false);
            setIsError(false);
        } catch (error) {
            console.error(error)
            setloading(false);
            setIsError(true);
        }

    }
    useEffect(()=>{
        fechUserData(URL)
    },[URL]);

    return[userData, loading,isError]


}
