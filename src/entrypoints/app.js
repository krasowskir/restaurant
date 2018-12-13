import React from "react";
import ReactDOM from "react-dom";
import Restaurant from "../RestaurantContainer/Restarant";
import MyModal from "../Modal/MyModal";
import "../scss/app.scss";

ReactDOM.render(<Restaurant />, document.getElementById("root"));
ReactDOM.render(<MyModal />, document.getElementById("reservation-point"));
