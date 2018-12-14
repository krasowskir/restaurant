import { Link } from "react-router-dom";
import React from "react";

export default props => (
  <div className="container footer">
    <div className="row">
      <div className="col-lg-12">
        <h1>Kontakt</h1>
        <p>Königswinterer Str. 318 / 53227, Bonn</p>
        <p>Öffnungszeiten: 08:00 - 12:00</p>
        <div className="social-media">
          <a href="#">
            <i className="fab fa-facebook-square" />{" "}
          </a>{" "}
          <a href="#">
            <i className="fab fa-twitter-square" />{" "}
          </a>
          <a href="#">
            <i className="fab fa-pinterest-square" />
          </a>{" "}
          <a href="#">
            <i className="fab fa-instagram" />{" "}
          </a>
        </div>
      </div>
    </div>
  </div>
);
