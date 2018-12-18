import React from "react";
import { Switch, Route } from "react-router-dom";
import Restaurant from "../RestaurantContainer/Restarant";
import About from "../AboutContainer/About";
import Menu from "../MenuContainer/Menu";
import Contact from "../Contact/Contact";

export default props => (
  <main>
    <Switch>
      <Route exact path="/" component={Restaurant} />
      <Route path="/about" component={About} />
      <Route path="/menu" component={Menu} />
      <Route path="/contact" component={Contact} />
    </Switch>
  </main>
);
