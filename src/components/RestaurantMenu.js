import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { FaStar } from "react-icons/fa";
import { CDN_URL } from "../utils/constants";
import { SWIGGY_RES_MENU } from "../utils/constants";
import { useParams } from "react-router-dom";
import ResMenuInfo from "./ResMenuInfo";
import ResOffers from "./ResOffers";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(SWIGGY_RES_MENU + resId);
    const json = await data.json();

    console.log(json);

    setResInfo(json?.data);
  };

  if (resInfo === null) return <Shimmer />;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card
      ?.card ?? {};

  console.log(itemCards);

  const btnVegHandler = (e) => {
    if (e.target.checked) {
      const filteredItemCards = itemCards.filter(
        (item) => item?.card?.info?.isVeg
      );

      setResInfo(filteredItemCards);
    } else {
      const bothVegNonVegMenu =
        resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards;
      setResInfo(bothVegNonVegMenu);
    }
  };

  return (
    <div className="restaurant-info">
      <ResMenuInfo restroInfo={resInfo?.cards[0]?.card?.card?.info} />
      <ResOffers
        restroOffer={
          resInfo?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers
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

        <div className="menu-container">
          {itemCards.map((item) => (
            <div className="oneCard" key={item.card.info.id}>
              <div className="card-info">
                <p>{item.card.info.ribbon.text}</p>
                <h2>{item.card.info.name}</h2>
                <h4>
                  {"Rs."}
                  {item.card.info.price / 100}
                </h4>
                <h5>{item.card.info.description}</h5>
              </div>

              <div className="card-img">
                <img
                  className="item-img"
                  src={CDN_URL + item.card?.info?.imageId}
                ></img>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
