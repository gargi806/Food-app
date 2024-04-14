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
    <div className="flex justify-evenly shadow-xl shadow-slate-400 text-center border-2 border-solid border-gray-400 rounded-lg mb-4">
      <div className="p-4 m-2 ">
        <img
          className="rounded-md w-20 h-20 m-3 "
          src={CDN_URL + cloudinaryImageId}
        />
      </div>

      <div className="pt-6 ">
        <p className="text-2xl font-semibold p-2">{name}</p>
        <p className="res-cuisines">{cuisines.join(",")}</p>
        <p className="res-locality">{locality}</p>
      </div>

      <hr className="solid"></hr>

      <div className="pt-12 ">
        <ul>
          <li>{[sla.slaString]} </li>
          <li>{costForTwoMessage} </li>
        </ul>
      </div>

      <hr className="solid"></hr>

      <div className="pt-8">
        <p>
          {" "}
          <FaStar />
          {avgRating}{" "}
        </p>

        <p>{totalRatingsString}</p>
      </div>
    </div>
  );
};

export default ResMenuInfo;
