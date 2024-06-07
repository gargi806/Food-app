import { MENU_ITEM_IMAGE_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-2 flex justify-between"
        >
          <div>
            <div className="font-bold text-lg p-2 m-2">
              <span> {item.card.info.name}</span>
              <span>
                {" "}
                ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}{" "}
              </span>
            </div>

            <p>{item.card.info.description}</p>
          </div>
          <div>
            <button className="absolute bg-amber-300 text-white shadow-lg rounded-lg my-18 mx-18 p-2">
              Add+
            </button>
            <img
              src={MENU_ITEM_IMAGE_URL + item.card.info.imageId}
              className="w-40 rounded-lg my-4"
            ></img>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
