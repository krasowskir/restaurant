import React, { Component } from "react";
import Dummy from "../Dummy/Dummy";

import "./aboutContainer.scss";

export default class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <Dummy />
      </div>
    );
  }
}
