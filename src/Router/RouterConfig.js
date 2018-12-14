import React from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "../templates/Header";
import Footer from "../templates/Footer";
import Main from "./Main";

export default () => (
  <BrowserRouter>
    <div>
      <Header logo={"Pastacasa"} />
      <Main />
      <Footer />
    </div>
  </BrowserRouter>
);
