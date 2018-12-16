import React from "react";
import ReactDOM from "react-dom";
import RouterConfig from "./src/Router/RouterConfig";
import ReservationModal from "./src/Reservation/ReservationModal";
import "./public/assets/scss/app.scss";

ReactDOM.render(<RouterConfig />, document.getElementById("root"));
ReactDOM.render(<ReservationModal />, document.getElementById("reservation-point"));
