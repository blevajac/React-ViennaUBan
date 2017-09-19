import L from 'leaflet';
import {  MapControl } from 'react-leaflet';

//css
import '../../../css/custom-info-control.css'

//main component
class CustomControlZoom extends MapControl {
  componentWillMount() {
    const centerControlZoom = L.control.zoom({position: 'bottomleft'});

    this.leafletElement = centerControlZoom;
  }
}

export default CustomControlZoom;
