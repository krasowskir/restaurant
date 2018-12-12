import React, { Component } from "react";
import sky from "../../public/assets/sky.jpg";
import "./container.scss";

export default class MeinComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="meinContainer">
        <img src={sky} alt="..." className="meinImage" />
      </div>
    );
  }
}
