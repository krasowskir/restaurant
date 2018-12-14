import React from "react";
import ReactDOM from "react-dom";
import RouterConfig from "./src/Router/RouterConfig";
import MyModal from "./src/Modal/MyModal";
import "./public/assets/scss/app.scss";

ReactDOM.render(<RouterConfig />, document.getElementById("root"));
ReactDOM.render(<MyModal />, document.getElementById("reservation-point"));
