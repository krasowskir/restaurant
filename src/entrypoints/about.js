import React from "react";
import ReactDOM from "react-dom";
import MyModal from "../Modal/MyModal";
import About from "../AboutContainer/About";

import "../scss/app.scss";

ReactDOM.render(<About />, document.getElementById("myabout"));
ReactDOM.render(<MyModal />, document.getElementById("reservation-point"));
