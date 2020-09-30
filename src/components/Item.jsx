import React from "react";
import { useParams } from "react-router-dom";

// we will be importing and adding a lot of items to this component
function Item(props) {
  console.log("item props", props);
  const { itemId } = useParams(); // { itemId: "2"}
  const shopItem = props.items.find((item) => item.id === Number(itemId)); // {item object}
  return (
    <div className="item-wrapper">
      <div className="item-header">
        <div className="image-wrapper">
          <img src={shopItem.imageUrl} alt={shopItem.name} />
        </div>
        <div className="item-title-wrapper">
          <h2>{shopItem.name}</h2>
          <h4>${shopItem.price}</h4>
        </div>
      </div>
      <nav className="item-sub-nav">{/* Links go here */}</nav>
      {/* Nested Routing Routes go here -> Remember! These turn into the component if path matches */}
    </div>
  );
}
export default Item;
