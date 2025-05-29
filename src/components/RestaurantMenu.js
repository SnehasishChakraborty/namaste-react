import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu"

const RestaurantMenu = () => {
    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

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