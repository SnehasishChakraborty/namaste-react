import { API_URL } from "../utils/constants";
import RestaurantCard, {withLabelVeg} from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [listOfRes, setListOfRes] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [filteredList, setFilteredList] = useState([]);
    const [rating, setRating] = useState(0);

    const RestaurantCardVeg = withLabelVeg(RestaurantCard);

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

    const onlineStatus = useOnlineStatus();

    const settingRating = (list) => {
        setFilteredList(list)
    }

    useEffect(()=>{
        if (rating === 0) {
            setFilteredList(listOfRes);
        } else {
            const list = listOfRes.filter(res => res.info.avgRating > rating);
            setFilteredList(list);
        }
    },[rating])

    if(!onlineStatus) {
        return (
            <div>
                <h2>Looks like you are offline!</h2>
                <h2>Please check your internet connection.</h2>
            </div>
        )
    }

    if(listOfRes.length === 0){
        return <Shimmer />
    }

    return (
    <div>
        <div className="flex">
            <div className="flex py-4 mx-4 pb-8">
                <input className="border border-solid border-black " type="text" value={inputValue} onChange={(e)=>{
                    setInputValue(e.target.value);
                    // if(inputValue === "")
                    //     setFilteredList(listOfRes);
                    // else{
                    //     const searchFilteredList = listOfRes?.filter(res => res.info.name.toLowerCase().includes(inputValue));
                    //     setFilteredList(searchFilteredList);
                    // }
                }} />

                <div className="mx-2 bg-blue-100 px-4 shadow-lg rounded-xl hover:cursor-pointer">
                    <button className="hover:cursor-pointer" onClick={()=>{
                        const searchFilteredList = listOfRes?.filter(res => res.info.name.toLowerCase().includes(inputValue.toLowerCase()));
                        setFilteredList(searchFilteredList);
                    }}>Search</button>
                </div>
            

                <div>   
                    <button className={`flex items-center shadow-lg mx-6 px-4 bg-blue-100 rounded-xl hover:cursor-pointer ${rating===4.5 ? "bg-blue-400 text-white":"bg-blue-100"}`} onClick={()=>{
                        rating === 0 ? setRating(4.5) : setRating(0);
                    }}>Top Rated Restaurants</button>
                </div> 
            </div>
        </div>
        
        <div className="flex flex-wrap">
            {
                filteredList?.map(res => {
                   return res?.info?.veg === true ?
                        <Link style={{textDecoration:"none", color: "black"}} 
                    key={res.info.id} to={"/restaurant/"+res.info.id}><RestaurantCardVeg resData={res}/></Link> :
                <Link style={{textDecoration:"none", color: "black"}} 
                    key={res.info.id} to={"/restaurant/"+res.info.id}><RestaurantCard resData={res}/></Link>
                })
                
            }
        </div>
    </div>
);}

export default Body;