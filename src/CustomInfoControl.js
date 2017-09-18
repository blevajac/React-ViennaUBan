import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import L from 'leaflet';
import {  MapControl } from 'react-leaflet';

//data
import geojsonDataByLines from './vienna_metro_lines_byLines.json';

//css
import './css/custom-info-control.css'

//main component
class CustomInfoControl extends MapControl {
  componentWillMount() {
    const { data } = this.props;    
    const centerControl = L.control({position: 'topright'});

    centerControl.onAdd = function (map) {
      this.div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
      this.update();
      return this.div;

    };

    centerControl.update = function (props) {
      this.div.innerHTML = '<h4>Viena Metro Line</h4>' +  (props ?
        '<b>' + data.properties.name + '</b>': 'Hover over a Metro line');
    };

    this.leafletElement = centerControl;
  }

  highlightFeature(e) {
  //------------------
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });
  //------------------
    this.centerControl.update(this.layer.feature.properties);
  }

  resetHighlight(e) {
  //---------------
    //geojson.resetStyle(e.target);
  //---------------
    this.centerControl.update();
  }
//------------------------
  ///zoomToFeature(e) {
  //  map.fitBounds(e.target.getBounds());
  //}
//---------------------------
//  onEachFeature(feature, layer) {
//      layer.on({
//          mouseover: this.highlightFeature,
//          mouseout: this.resetHighlight,
//          click: this.zoomToFeature
//      });
//  }
}



export default CustomInfoControl;
