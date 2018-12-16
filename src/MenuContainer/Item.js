import React from "react";
import ProductDetailModal from "../ProductDetailModal/ProductDetailModal";
import schaschlik_detail from "../../public/assets/img/product_detail/schaschlik_detail.jpg";

const ItemRow = props => {
  const rowsCount = Math.floor(props.group.items.length / 3);
  const rows = [];

  for (let i = 0; i < rowsCount; i++) {
    let currentrow = props.group.items.slice(i * 3, i * 3 + 3);
    rows.push(currentrow);
  }

  return (
    <div className="row">
      <div className="col-12">
        <h2 className="page-header">{props.group.name}</h2>
        {rows.map(row => {
          return (
            <div className="row">
              {row.map(item => (
                <div className="col-3 offset-1  menu__cell">
                  <h3>
                    <ProductDetailModal caption={item.name} category={item.name} img={schaschlik_detail} description="Item description" />
                  </h3>
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
