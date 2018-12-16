import React, { Component } from "react";
import banner_about from "../../public/assets/img/about_restaurant_frisiert.jpg";

import "./aboutContainer.scss";

export default class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container about">
        <img src={banner_about} alt="..." className="meinImage img-fluid" />
        <div className="row">
          <div className="col-5 about__description">
            <h2 className="large">Gutes Essen, gute Leute, gute Zeit.</h2>
            <div className="social-media">
              <a href="#">
                <i className="fab fa-facebook-square" />{" "}
              </a>{" "}
              <a href="#">
                <i className="fab fa-twitter-square" />{" "}
              </a>
              <a href="#">
                <i className="fab fa-pinterest-square" />
              </a>{" "}
              <a href="#">
                <i className="fab fa-instagram" />{" "}
              </a>
            </div>
            <p>
              <small>
                Kontakt
                <br />
                Königswinterer Str. 318 / 53227, Bonn
                <br />
                Öffnungszeiten: 08:00 - 12:00
                <br />
              </small>
            </p>
          </div>
          <div className="col-6 offset-lg-1 about__description">
            <h3>Our Story</h3>
            <h4>
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
              ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat
              eleifend leo.
            </h4>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
              ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitaeest. Mauris placerat
              eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit
              amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim
              in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros
              eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus
            </p>
          </div>
        </div>
      </div>
    );
  }
}
