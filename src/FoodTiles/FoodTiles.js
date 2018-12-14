import React from "react";
import pelmeni from "../../public/assets/img/pelmeni.jpg";
import schaschlik from "../../public/assets/img/schaschlik.jpg";
import schipovnik from "../../public/assets/img/schipovnik.jpg";
import schuba from "../../public/assets/img/schuba.jpg";

import "./foodTiles.scss";

const FoodTiles = props => (
  <div className="home-food row">
    <div className="col-lg-3 home-food__content">
      <a href="menu.html">
        <img src={pelmeni} width="250" height="auto" alt="Food feature 1" className="img-thumbnail rounded-circle img-fluid" />
      </a>
      <h4>Pelmeni</h4>
    </div>
    <div className="col-lg-3 home-food__content">
      <a href="menu.html">
        <img src={schaschlik} width="250" height="auto" alt="Food feature 2" className="img-thumbnail rounded-circle img-fluid" />
      </a>
      <h4>Schaschlik</h4>
    </div>
    <div className="col-lg-3 home-food__content">
      <a href="menu.html">
        <img src={schuba} width="250" height="auto" alt="Food feature 3" className="img-thumbnail rounded-circle img-fluid" />
      </a>
      <h4>Schuba</h4>
    </div>
    <div className="col-lg-3 home-food__content">
      <a href="menu.html">
        <img src={schipovnik} width="250" height="auto" alt="Food feature 4" className="img-thumbnail rounded-circle img-fluid" />
      </a>
      <h4>Schipovnik</h4>
    </div>
  </div>
);

export default FoodTiles;
