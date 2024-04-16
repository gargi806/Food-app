import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
//import { SWIGGY_RES_MENU } from "../utils/constants";
import { useParams } from "react-router-dom";
import ResMenuInfo from "./ResMenuInfo";
import ResOffers from "./ResOffers";
//import ResMenuCategories from "./ResMenuCategories";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null); //data hasn't been fetched yet or is in the process of being fetched.
  const [resOffers, setResOffers] = useState(); //it could be assigned an array, an object, or any other type of data later on.
  //const [resMenu, setResMenu] = useState([]); //initial state is no menu items, and you expect an array of menu items to be loaded later.

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

  //console.log(resMenuCategories);

  const btnVegHandler = (e) => {
    console.log("resmenu cat before filter", resMenuCategories);
    if (e.target.checked) {
      let filteredCategories = [];
      resMenuCategories.forEach((category) => {
        let { title, itemCards } = category?.card?.card;
        if (itemCards !== undefined) {
          itemCards = itemCards.filter((item) => item?.card?.info?.isVeg);
          //console.log(itemCards);
          filteredCategories.push({
            card: { card: { title: title, itemCards: itemCards } },
          });
          console.log("resmenu cat after filter", filteredCategories);
        }
      });
      setResMenuCategories(filteredCategories);
    } else {
      console.log("inside else");
      let i = 0;
      if (resInfo?.data?.cards.length === 4) i = 3;
      else i = 2;
      const bothVegNonVegMenu =
        resInfo.data.cards[i].groupedCard.cardGroupMap.REGULAR.cards;
      setResMenuCategories(bothVegNonVegMenu);
    }
  };

  return (
    <div className="restaurant-info">
      <ResMenuInfo restroInfo={resInfo?.cards[2]?.card?.card?.info} />
      <ResOffers
        restroOffer={
          resInfo?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers[0]
            .info
        }
      />

      <div className="veg-box">
        <label htmlFor="veg-only-chkbox">Veg only</label>
        &nbsp;
        <input type="checkbox" id="veg-only-chkbox" onChange={btnVegHandler} />
      </div>

      <div className="menu">
        <div className="header-menu">
          <h1>Menu</h1>

          <ul>
            {itemCards ? (
              itemCards.map((item) => (
                <li key={item.card.info.id}>{item.card.info.name}</li>
              ))
            ) : (
              <li>No items available</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
