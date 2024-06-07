import { FaStar } from "react-icons/fa";
import { CDN_URL } from "../utils/constants";

const ResMenuInfo = (props) => {
  const { restroInfo } = props;

  const {
    name,
    cuisines,
    locality,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    sla,
    cloudinaryImageId,
  } = restroInfo;

  return (
    <div className="flex flex-col md:flex-row justify-between items-center shadow-xl shadow-slate-400 text-center border-2 border-solid border-gray-400 rounded-lg mb-4 p-4">
      <div className="p-4 m-2">
        <img
          className="rounded-md w-40 h-40 md:w-20 md:h-20 object-cover"
          src={CDN_URL + cloudinaryImageId}
          alt={name}
        />
      </div>

      <div className="flex flex-col justify-center items-center pt-4 md:pt-6">
        <p className="text-3xl font-semibold p-2 text-red-800 underline">
          {name}
        </p>
        <p className="text-gray-700">{cuisines.join(", ")}</p>
        <p className="text-gray-500">{locality}</p>
      </div>

      <div className="flex flex-col justify-center items-center pt-4 md:pt-14 text-lg text-gray-700">
        <ul>
          <li>{sla.slaString}</li>
          <li>{costForTwoMessage}</li>
        </ul>
      </div>

      <div className="flex flex-col justify-center items-center pt-4 md:pt-10 text-lg text-amber-500">
        <p className="flex items-center space-x-1">
          <FaStar />
          <span>{avgRating}</span>
        </p>
        <p>{totalRatingsString}</p>
      </div>
    </div>
  );
};

export default ResMenuInfo;
