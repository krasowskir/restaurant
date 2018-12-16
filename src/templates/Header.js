import { Link } from "react-router-dom";
import React from "react";

export default props => (
  <header className="container header">
    <div className="row">
      <div className="col">
        <h1 className="headline">{props.logo}</h1>
      </div>
      <div className="col-lg-6">
        <div className="main-nav float-right">
          <ul className="list-inline">
            <li className="list-inline-item ">
              <Link to="/">Home</Link>
            </li>
            <li className="divider list-inline-item ">/</li>
            <li className="list-inline-item ">
              <Link to="/menu">Menu</Link>
            </li>
            <li className="divider list-inline-item ">/</li>
            <li className="list-inline-item ">
              <Link to="/about">About</Link>
            </li>
            <li className="divider list-inline-item ">/</li>
            <li className="list-inline-item ">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="list-inline-item" id="reservation-point" />
          </ul>
        </div>
      </div>
    </div>
  </header>
);
