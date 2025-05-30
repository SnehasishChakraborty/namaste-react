import { CDN_LINK } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;
    const {name, cuisines, avgRating, costForTwo, cloudinaryImageId} = resData.info;
    const {lastMileTravel, slaString} = resData.info.sla;
    return (
        <div className="w-56 m-3 p-3 bg-gray-200 rounded-2xl hover:bg-gray-300 ">
            <img className="w-56 h-48 rounded-xl" 
                alt="res logo" 
                src={CDN_LINK+cloudinaryImageId}>

            </img>
            <h3 className="font-bold my-2 text-xl">{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{lastMileTravel} kms</h4>
            <h4>{slaString}</h4>
            <h4>{costForTwo}</h4>
        </div>
    );
}

export const withLabelVeg = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute m-2 p-2 bg-black text-white rounded-lg">Veg</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;