import { MENU_ITEM_IMAGE_URL } from "../utils/constants";
import vegIcon from "../img/vegIcon.png";
import nonVegIcon from "../img/nonVeg.png";
import { FaRupeeSign } from "react-icons/Fa";

const ResMenuCategories = (props) => {
  const { restroCategory } = props;

  const { title, itemCards } = restroCategory;
  //console.log(restroCategory);

  const showHideMenuCategory = (e) => {
    const categoryHeader = e.target.closest(".menu-category-header");
    const categoryBody = categoryHeader.nextElementSibling;
    const icon = categoryHeader.querySelector("i");

    showHideElement(categoryBody, icon);
  };

  const showHideElement = (element, icon) => {
    if (element.classList.contains("hide")) {
      element.classList.remove("hide");
      icon.classList.remove("fa-sort-desc");
      icon.classList.add("fa-sort-asc");
    } else {
      element.classList.add("hide");
      icon.classList.remove("fa-sort-asc");
      icon.classList.add("fa-sort-desc");
    }
  };

  return (
    <div className="menu-category">
      <div className="menu-category-header">
        <h2 className="menu-category-title">
          {title + " (" + itemCards.length + ")"}
        </h2>
        <button className="btn-show-hide" onClick={showHideMenuCategory}>
          <i
            className={title === "Recommended" ? "fa-sort-asc" : "fa-sort-desc"}
          ></i>
        </button>
      </div>

      <div
        className={
          title === "Recommended"
            ? "menu-category-body"
            : "menu-category-body hide"
        }
      >
        {itemCards.map((itemCard) => {
          const { name, defaultPrice, price, isVeg, description, imageId, id } =
            itemCard?.card?.info;
          return (
            <div key={id} className="menu-item">
              <div className="menu-info">
                {isVeg ? (
                  <img src={vegIcon} className="veg-icon"></img>
                ) : (
                  <img src={nonVegIcon} className="non-veg-icon"></img>
                )}
                <h3 className="menu-item-name">{name}</h3>
                <h4 className="menu-item-price">
                  <i className="rupeeIcon">
                    <FaRupeeSign />
                  </i>
                  &nbsp;
                  {price / 100 || defaultPrice / 100}
                </h4>
                <p className="menu-item-desc">{description}</p>
              </div>

              <div>
                <img
                  className="menu-item-image"
                  src={MENU_ITEM_IMAGE_URL + imageId}
                ></img>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ResMenuCategories;
