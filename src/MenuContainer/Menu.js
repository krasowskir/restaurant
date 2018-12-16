import React, { Component } from "react";
import ProductDetailModal from "../ProductDetailModal/ProductDetailModal";
import schaschlik_detail from "../../public/assets/img/product_detail/schaschlik_detail.jpg";
import products from "../Api/api";
import ItemRow from "./Item";

import "./menu.scss";

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      err: null
    };
  }

  componentDidCatch(err) {
    this.setState({
      err: "error " + err
    });
  }

  render() {
    const { groups } = products;

    return (
      <div className="container ">
        {this.state.err != null ? (
          <div>Error in ItemRow</div>
        ) : (
          <div className="menu">
            {/* <div className="row menu__row">
            <div className="col-3 offset-1 menu__cell">
              <h3>
                <ProductDetailModal caption="Schaschlick" category="Apetithäppchen" img={schaschlik_detail} description="Item description" />
              </h3>
              <p>Item description</p>
              <p className="price">4.99€</p>
            </div>
            
          </div> */}
            {<ItemRow group={groups[0]} />}
            {<ItemRow group={groups[1]} />}
            {<ItemRow group={groups[2]} />}
          </div>
        )}
      </div>
    );
  }
}
