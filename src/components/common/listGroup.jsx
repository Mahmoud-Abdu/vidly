import React from "react";

const ListGroup = ({ items, textProperty, valueProperty, selectedItem, onItemSelect }) => {
   console.log(selectedItem);
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          key={item[valueProperty]}
          style={{ cursor: "pointer" }}
          onClick={() => onItemSelect(item)}
          className={
            selectedItem === item
              ? "list-group-item active"
              : "list-group-item"
          }
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
