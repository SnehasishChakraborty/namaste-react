import { useState, useEffect } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(()=>{
            fetchData();
        },[])
    
        const fetchData = async () => {
            const data = await fetch("https://proxy.cors.sh/"+MENU_API+resId,{
            method: 'get',
            headers: {
                'x-cors-api-key': 'temp_42144e6dd2ffe246db5c85e971346562',
            }
            });
            const json = await data.json()
            setResInfo(json?.data);
        }

    return resInfo;
}

export default useRestaurantMenu;