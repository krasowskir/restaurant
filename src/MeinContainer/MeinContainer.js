import React, { Component } from "react";
import "./container.scss";

export default class MeinComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="meinContainer">
        <div className="meinItem">Das Item</div>
      </div>
    );
  }
}
