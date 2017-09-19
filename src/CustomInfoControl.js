import React from 'react';
import ReactDOM from 'react-dom';
import L from 'leaflet';
import {  MapControl } from 'react-leaflet';

//css
import './css/custom-info-control.css'

//main component
class CustomInfoControl extends MapControl {
  componentWillMount() {
    const centerControl = L.control({position: 'topleft'});
    
    const jsx = (
      <div {...this.props}>
        <h4>Viena Metro Line</h4>
        <h5>Map instractions: </h5>
        <ul>
          <li>
            Hover over the lines to see which Metro line it is.
          </li>
          <li>
            Hover over the circles to see which Metro station it is.
          </li>
          <li>
            Click anywhere on the map to get back to default Map zoom and location.
          </li>
          <li>
            Layers control in the upper right corner can change some of the maps options.
          </li>
        </ul>
      </div>
    );

    centerControl.onAdd = function (map) {
      let div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
      ReactDOM.render(jsx, div);
      return div;
    };

    this.leafletElement = centerControl;

  }
}

export default CustomInfoControl;
