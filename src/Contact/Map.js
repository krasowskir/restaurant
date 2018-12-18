import React, { Component } from "react";
import pointer from "../../public/assets/img/placeholder.svg";
import ReactDOM from "react-dom";

export default class Map extends Component {
  constructor(props) {
    super(props);

    this.platform = null;
    this.map = null;

    this.state = {
      app_id: "F3YqGAM0kK3oA6SfypG0",
      app_code: "CgoDzJMVWIzq1QKEyMP7XA",
      center: {
        lat: "50.7258952",
        lng: "7.1477474"
      },
      zoom: 13,
      theme: "normal.day"
    };
  }

  // TODO: Add theme selection discussed later HERE

  componentDidMount() {
    this.platform = new window.H.service.Platform(this.state);

    var layers = this.platform.createDefaultLayers();
    var container = document.getElementById("here-map");

    this.map = new H.Map(container, layers.normal.map, {
      center: this.state.center,
      zoom: this.state.zoom
    });

    //damit man reinzoomen kann und den Standort verändern kann
    var events = new window.H.mapevents.MapEvents(this.map);

    this.map.addEventListener("tap", function(event) {
      console.log(event.type, event.currentPointer.type);
    });

    //Standartaktionen ( move etc) werden damit ermöglicht
    var behavior = new window.H.mapevents.Behavior(events);
    
    //platziert ui Elemente auf der Karte, wie zoom und Maaßstab, und MapSelector
    var ui = new window.H.ui.UI.createDefault(this.map, layers);

    var icon = new H.map.Icon(pointer),
      coords = { lat: 50.7258952, lng: 7.1477474 },
      marker = new H.map.Marker(coords, { icon: icon });

    this.map.addObject(marker);
  }

  render() {
    return <div id="here-map" style={{ width: "100%", height: "300px", background: "grey" }} />;
  }
}
