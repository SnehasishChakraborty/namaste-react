import { CDN_LINK } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;
    const {name, cuisines, avgRating, costForTwo, cloudinaryImageId} = resData.info;
    const {lastMileTravel} = resData.info.sla;
    return (
        <div className="res-card">
            <img className="res-logo" 
                alt="res logo" 
                src={CDN_LINK+cloudinaryImageId}>

            </img>
            <h3>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{lastMileTravel} kms</h4>
            <h4>{costForTwo}</h4>
        </div>
    );
}

export default RestaurantCard;