import L from 'leaflet';
import {  MapControl } from 'react-leaflet';

//css
import './css/custom-legend-controls.css'

function getColor(d) {
    return d > 5 ? '#996633' :
           d > 4 ? '#009933' :
           d > 3 ? '#ff9933' :
           d > 2 ? '#9933ff' :
           d > 1 ? '#cc0000' :
                   'blue';
}

//main component
class CustomLegendControl extends MapControl {
  componentWillMount() {
    const centerControl = L.control({position: 'bottomright'});

    centerControl.onAdd = function (map) {
      var div = L.DomUtil.create('div', 'info legend'),
        grades = [ 1, 2, 3, 4, 5 ],
        labels = [ 'U1', 'U2', 'U3', 'U4', 'U6' ];

    // loop through our density intervals and generate a label with a colored square for each interval
      for (var i = 0; i < grades.length; i++) {
          div.innerHTML +=
          '<i style="background:' + getColor(grades[i] + 1) + '"></i>  Metro line: '+ labels[i] + '<br>';
      }

      return div;
    };

    this.leafletElement = centerControl;
  }
}

export default CustomLegendControl;
