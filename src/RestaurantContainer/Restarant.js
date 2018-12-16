import React, { Component } from "react";
import sky from "../../public/assets/img/sky.jpg";
import About from "./About/About";
import FoodTiles from "./FoodTiles/FoodTiles";
import ReviewCarousel from "./ReviewCarousel/ReviewCarousel";

import "./container.scss";
const data = [
  {
    review: `Das ist der beste Schaschlick, den ich je gegessen hatte. 
    Ich empfehle euch Schaschlick mit den Dosentomaten!
    diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
     no sea takimata sanctus est Lorem ipsum dolor sit amet. 
     Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
     invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
     At vero eos et accusam et justo duo dolores et ea rebum. 
    Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.`
  },
  {
    review: `Schipovnik ist ein süßes Hagebuttengetränk. 
    Es schmeckt fantastisch und bietet eine gute Alternative zu den überzuckerten Softgetränken.
    diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
     no sea takimata sanctus est Lorem ipsum dolor sit amet. 
     Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
     invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
     At vero eos et accusam et justo duo dolores et ea rebum. 
    Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.`
  },
  {
    review: `Der Schichtsalat Schuba ist der beste! 
    Leider gibt es den nicht so häufig in Deutschland zu kaufen. Aber er schmeckt gigantisch :=)
    diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
     no sea takimata sanctus est Lorem ipsum dolor sit amet. 
     Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
     invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
     At vero eos et accusam et justo duo dolores et ea rebum. 
    Stet clita kasd gubergren, no sea taRestaurantkimata sanctus est Lorem ipsum dolor sit amet.`
  }
];

export default class MeinComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <img src={sky} alt="..." className="meinImage img-fluid" />
        <About />
        <FoodTiles />
        <ReviewCarousel data={data} />
      </div>
    );
  }
}
