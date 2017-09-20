import React from 'react';
import ReactDOM from 'react-dom';
import L from 'leaflet';
import {  MapControl } from 'react-leaflet';
import Combobox from 'react-widgets/lib/Combobox';

//css
import '../../../css/custom-info-control.css'
import 'react-widgets/dist/css/react-widgets.css';

let viennaMetroLines = ['All Metro Lines', 'U1', 'U2', 'U3', 'U4', 'U6'];

//main component
class CustomInfoControl extends MapControl {
  changeMe(e) {
    this.props.callbackFromParent(e);
  }

  componentWillMount() {
    const centerControl = L.control({position: 'topleft'});

    const jsx = (
      <div >
        <h4>Viena Metro Line</h4>
        <Combobox className="combo-box-box"
          autoFocus={true}
          data={viennaMetroLines}
          defaultValue={"All lines"}
          onChange={ this.changeMe.bind(this) }
        />

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
