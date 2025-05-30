import { CDN_LINK } from "../utils/constants";

const ItemsCard = ({data}) => {
    const {name, description, imageId} = data;

    return (
        <div className="flex justify-between w-6/12 m-auto py-3 border-b-2 border-solid border-gray-200">
            <div className="text-left w-9/12 pl-4 pr-2">
                <h1>{name} - ₹{data.price/100 || data.defaultPrice/100}</h1>
                <h2 className="text-xs">{description}</h2>
            </div>
            
            <div className="w-3/12 pr-4">
                <div className="absolute w-16 p2 bg-white rounded-lg mr-4">
                    <h1>Add +</h1>
                </div>
                <img className="rounded-lg w-64 h-32" src={CDN_LINK + imageId}/>
            </div>
        </div>
    )
}

export default ItemsCard;