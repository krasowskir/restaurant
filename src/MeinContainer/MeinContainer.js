import React, { Component } from "react";
import sky from "../../public/assets/sky.jpg";
import About from "../About/About";
import FoodTiles from "../FoodTiles/FoodTiles";
import "./container.scss";

export default class MeinComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <img src={sky} alt="..." className="meinImage img-fluid" />
        <About />
        <FoodTiles />
      </div>
    );
  }
}
