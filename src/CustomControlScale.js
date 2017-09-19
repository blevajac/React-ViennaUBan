import L from 'leaflet';
import {  MapControl } from 'react-leaflet';

//css
import './css/custom-info-control.css'

//main component
class centerControlScale extends MapControl {
  componentWillMount() {
    const centerControlScale = L.control.scale({position: 'bottomleft'});    

    this.leafletElement = centerControlScale;
  }
}

export default centerControlScale;
