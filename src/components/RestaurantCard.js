import { CDN_URL } from "../utils/constants.js";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } = resData;

  return (
    <div className="res-card bg-white shadow-lg border-2 border-solid border-gray-200 rounded-lg p-4 m-4 w-full md:w-80 lg:w-96">
      <img
        className="res-img w-full h-48 object-cover rounded-t-lg"
        src={CDN_URL + cloudinaryImageId}
        alt={name}
      />
      <div className="p-4">
        <h1 className="text-2xl font-semibold">{name}</h1>
        <h4 className="text-gray-600">{cuisines.join(", ")}</h4>
        <h4 className="text-yellow-500">{avgRating} stars</h4>
        <h4 className="text-gray-800">{costForTwo}</h4>
      </div>
    </div>
  );
};

//higher order component

//input - restaurant card ==>> promoted restaurant card

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2">isOpen</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
