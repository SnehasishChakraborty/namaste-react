import ItemsCard from "./ItemsCard";
import { useState } from "react";

const RestaurantItemCategory = ({data, showItems, changeShowIndex}) => {
    const {title,itemCards} = data

    const handleClick = () => {
        changeShowIndex();
    }

    return (
        <div>
            <div onClick={handleClick} className="flex justify-between w-6/12 m-auto mb-4 p-4 shadow-lg rounded-lg bg-gray-100">
                <span className="font-bold">{title} ({itemCards.length})</span>
                <span>{"🔽"}</span>
            </div>
            <div>
                {
                  showItems && itemCards.map(item => <ItemsCard key={item.card.info.id} data={item.card.info}/>)
                }
            </div>
        </div>
    )
}

export default RestaurantItemCategory;