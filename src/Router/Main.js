import React from "react";
import { Switch, Route } from "react-router-dom";
import Restaurant from "../RestaurantContainer/Restarant";
import About from "../AboutContainer/About";

export default props => (
  <main>
    <Switch>
      <Route exact path="/" component={Restaurant} />
      <Route path="/about" component={About} />
    </Switch>
  </main>
);
