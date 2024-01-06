import React from "react";

const ProductGroup = (props) => {
  const { items, textProperty, valueProperty, selectedItem, onItemSelect } =
    props;

  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          onClick={() => onItemSelect(item)}
          key={item[valueProperty]}
          className={
            item === selectedItem ? "list-group-item active" : "list-group-item"
          }
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ProductGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "price",
};

export default ProductGroup;
