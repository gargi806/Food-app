import RestaurantCard, { withPromotedLabel } from "./RestaurantCard.js";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Footer from "./Footer.js";

const BodyComponent = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  console.log(listOfRestaurants);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json);
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  //conditional rendering

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return <h1>Looks like you are offline!!!</h1>;

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex justify-center m-4 p-4">
        <div className="m-2 p-2">
          <input
            type="text"
            className="rounded-lg border-2 border-black m-1 p-2"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className=" m-4 p-2 bg-red-300 w-18 rounded-lg text-white "
            onClick={() => {
              console.log(searchText);

              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className=" m-6">
          <button
            className="bg-blue-400 p-4 w-60 rounded-lg text-slate-100
          "
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              console.log("clicked");
              setListOfRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>

      <div className="res-container">
        {filteredRestaurants?.map((restaurant) => (
          <Link
            className=" flex-wrap"
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {/**if the restaurant is promoted then add a promoted label to it*/}
            {restaurant.info.promoted ? (
              <RestaurantCardPromoted resData={restaurant?.info} />
            ) : (
              <RestaurantCard resData={restaurant?.info} />
            )}
          </Link>
        ))}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default BodyComponent;
