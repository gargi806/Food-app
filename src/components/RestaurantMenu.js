import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { SWIGGY_RES_MENU } from "../utils/constants";
import { useParams } from "react-router-dom";
import ResMenuInfo from "./ResMenuInfo";
import ResOffers from "./ResOffers";
//import ResMenuCategories from "./ResMenuCategories";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [resOffers, setResOffers] = useState();
  const [resMenu, setResMenu] = useState([]);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(SWIGGY_RES_MENU + resId);
    const json = await data.json();

    //console.log(json);

    setResInfo(json?.data);
    setResOffers(
      resInfo?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers
    );
    setResMenu(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
    );
  };

  if (resInfo === null) return <Shimmer />;

  //console.log(resMenuCategories);

  const btnVegHandler = (e) => {
    //console.log("resmenu cat before filter", resMenuCategories);
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
        </div>

        <div className="menu-container"></div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
