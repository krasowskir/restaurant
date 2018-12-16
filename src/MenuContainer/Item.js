import React from "react";

const ItemRow = props => {
  const rows = props.group.items % 3;
  const firstRow = props.group.items.slice(0, 3);
  const secondRow = props.group.items.slice(3);
  let i = 0;

  return (
    <div className="row">
      <div className="col-12">
        <h2 className="page-header">{props.group.name}</h2>
        <div className="row">
          {firstRow.map(item => (
            <div className="col-3 offset-1  menu__cell" id={i++}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p className="price">{item.price}</p>
            </div>
          ))}
        </div>
        <div className="row">
          {secondRow.map(item => (
            <div className="col-3 offset-1  menu__cell" id={i++}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p className="price">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemRow;
