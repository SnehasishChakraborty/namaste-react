import { API_URL } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [listOfRes, setListOfRes] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [filteredList, setFilteredList] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://proxy.cors.sh/"+API_URL,{
        method: 'get',
        headers: {
            'x-cors-api-key': 'temp_42144e6dd2ffe246db5c85e971346562',
        }
        });
        const json = await data?.json();
        //console.log(json);
        setListOfRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    

    if(listOfRes.length === 0){
        return <Shimmer />
    }

    return (
    <div className="body">
        <div className="filter">
            <div className="search">
                <input type="text" value={inputValue} className="search-box" onChange={(e)=>{
                    setInputValue(e.target.value);
                    // if(inputValue === "")
                    //     setFilteredList(listOfRes);
                    // else{
                    //     const searchFilteredList = listOfRes?.filter(res => res.info.name.toLowerCase().includes(inputValue));
                    //     setFilteredList(searchFilteredList);
                    // }
                }} />
                <button className="search-btn" onClick={()=>{
                    const searchFilteredList = listOfRes?.filter(res => res.info.name.toLowerCase().includes(inputValue.toLowerCase()));
                    setFilteredList(searchFilteredList);
                }}>Search</button>
            </div>

            <button className="filter-btn" onClick={()=>{
                const list = listOfRes.filter(res => res.info.avgRating > 4.5 );
                setFilteredList(list)
            }}>Top Rated Restaurants</button>
        </div>
        <div className="res-container">
            {
                filteredList?.map(res => <RestaurantCard key={res.info.id} resData={res}/>)
            }
        </div>
    </div>
);}

export default Body;