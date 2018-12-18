import React, { Component } from "react";
import Map from "./Map";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Map />
          </div>
        </div>
      </div>
    );
  }
}
