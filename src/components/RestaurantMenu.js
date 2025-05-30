import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu"
import RestaurantItemCategory from "./RestaurantItemCategory";
import { useState } from "react";

const RestaurantMenu = () => {
    const [showIndex, setShowIndex] = useState(0);
    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

    //const {name, city, avgRating, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

    if(resInfo === null){
        return <Shimmer />
    }

    const {name, city, avgRating, costForTwoMessage, cuisines} = resInfo?.cards[2]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    const itemCategories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
                            .filter(item => item?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    console.log(itemCategories)
    return (
        <div className="text-center">
            <div className="mb-6">
                <div className="mt-4 mb-2 ">
                    <h1 className="font-bold text-2xl">{name}</h1>
                    <h1 className="text-lg">{city} - {avgRating}⭐</h1>
                </div>
                <h2>{cuisines.join(", ")} - {costForTwoMessage}</h2>
            </div>
            <div className="">
                {
                    itemCategories.map((item, index) => 
                        <RestaurantItemCategory key={item.card.card.title} 
                                                data = {item.card.card} 
                                                showItems={index === showIndex ? true : false} 
                                                changeShowIndex = {()=>setShowIndex(prevIndex => prevIndex === index ? null : index)}/>)
                }
            </div>
        </div>
    )
}

export default RestaurantMenu;