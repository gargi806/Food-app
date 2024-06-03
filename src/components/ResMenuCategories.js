import ItemList from "./ItemList";
import { useState } from "react";

const ResMenuCategories = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    console.log("clicked");
    setShowIndex();
  };

  return (
    <div>
      <div
        className="w-full mx-auto my-4 bg-slate-200 shadow-lg p-4 flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold text-lg">
          {data.title}({data.itemCards.length})
        </span>
        <span>▼</span>
      </div>
      {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};
export default ResMenuCategories;
