import { resList } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
    let [listOfRes, setListOfRes] = useState(resList);
    return (
    <div className="body">
        <div className="filter">
            <button className="filter-btn" onClick={()=>{
                const filteredList = listOfRes.filter(res => res.info.avgRating > 4.5 );
                setListOfRes(filteredList);
            }}>Top Rated Restaurants</button>
        </div>
        <div className="res-container">
            {
                listOfRes.map(res => <RestaurantCard key={res.info.id} resData={res}/>)
            }
        </div>
    </div>
);}

export default Body;