import React, { Component } from "react";
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
            {<ItemRow group={groups[0]} />}
            {<ItemRow group={groups[1]} />}
            {<ItemRow group={groups[2]} />}
          </div>
        )}
      </div>
    );
  }
}
