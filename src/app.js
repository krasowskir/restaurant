import React from "react";
import ReactDOM from "react-dom";
import MyApp from "./index";
import MyModal from "./Modal/MyModal";
import "./app.scss";

ReactDOM.render(<MyModal />, document.getElementById("reservation-point"));
ReactDOM.render(<MyApp />, document.getElementById("root"));
