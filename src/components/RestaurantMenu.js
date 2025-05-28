import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const {resId} = useParams();

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
        
        //setResInfo(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
        console.log(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
    }

    //const {name, city, avgRating, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

    if(resInfo === null){
        return <Shimmer />
    }

    const {name, city, avgRating, costForTwoMessage, cuisines} = resInfo?.cards[2]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    

    return (
        <div>
            <h1>{name} - {city}</h1>
            <h2>{avgRating} stars - {costForTwoMessage}</h2>
            <h2>{cuisines.join(", ")}</h2>
            <br></br>
            <h2>Menu</h2>
            <div>
                <ul>
                    {itemCards?.map(item => {
                        console.log(item);
                        return <li key={item?.card?.info?.id}>{item?.card?.info?.name} - Rs. {item?.card?.info?.defaultPrice/100 || item.card.info.price/100}</li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default RestaurantMenu;