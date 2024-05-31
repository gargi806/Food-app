import { CDN_URL } from "../utils/constants.js";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } = resData;

  return (
    <div className="res-card ">
      <img className="res-img" src={CDN_URL + cloudinaryImageId} />
      <h1>{name}</h1>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
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
