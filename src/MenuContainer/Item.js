import React from "react";

const ItemRow = props => {
  const rowsCount = Math.floor(props.group.items.length / 3);
  console.log("rowscount " + rowsCount);
  const rows = [];

  for (let i = 0; i < rowsCount; i++) {
    let currentrow = props.group.items.slice(i * 3, i * 3 + 3);
    console.log("currentrow " + currentrow);
    rows.push(currentrow);
  }
  console.log(JSON.stringify(rows));

  return (
    <div className="row">
      <div className="col-12">
        <h2 className="page-header">{props.group.name}</h2>
        {rows.map(row => {
          return (
            <div className="row">
              {row.map(item => (
                <div className="col-3 offset-1  menu__cell">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <p className="price">{item.price}</p>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ItemRow;
