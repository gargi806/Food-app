import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
//import { SWIGGY_RES_MENU } from "../utils/constants";
import { useParams } from "react-router-dom";
import ResMenuInfo from "./ResMenuInfo";
import ResOffers from "./ResOffers";
import ResMenuCategories from "./ResMenuCategories";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null); //data hasn't been fetched yet or is in the process of being fetched.
  const [resOffers, setResOffers] = useState(); //it could be assigned an array, an object, or any other type of data later on.
  //const [resMenu, setResMenu] = useState([]); //initial state is no menu items, and you expect an array of menu items to be loaded later.
  const [showIndex, setShowIndex] = useState(0);
  const { resId } = useParams();

  //use effect takes two arguments, call back function and dependency array. no dependency array means data will be called again and again, empty array means called once.
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=" +
        resId +
        "&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER"
    );
    const json = await data.json();

    //console.log(json);

    setResInfo(json?.data);
    setResOffers(
      resInfo?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers
    );
  };

  if (resInfo === null) return <Shimmer />;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(categories);

  const firstTwoOffers = (resOffers ?? []).slice(0, 3);

  return (
    <div className="restaurant-info">
      <ResMenuInfo restroInfo={resInfo?.cards[2]?.card?.card?.info} />
      <h1 className="text-2xl text-slate-800 font-bold pt-6 mt-8 ml-6">
        Deals for you
      </h1>
      <div className="flex justify-evenly">
        {firstTwoOffers.map((offer) => (
          <ResOffers restroOffer={offer.info} />
        ))}
      </div>

      <hr className=" m-2 p-2 h-2 bg-slate-200"></hr>

      <div className="text-center">
        <h1 className="font-bold m-2 p-2 text-xl underline ">Menu</h1>
      </div>

      {/*   categories accordian*/}

      <div>
        {categories.map((category, index) => (
          <ResMenuCategories
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
