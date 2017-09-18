import React, { Component } from 'react';
import { Polyline, GeoJSON } from 'react-leaflet';
import L from 'leaflet';

//data
import geojsonDataByLines from './vienna_metro_lines_byLines.json';

//components
import CustomInfoControl from './CustomInfoControl';

const polygon = {
  "type": "Feature",
  "properties": {},
  "geometry": {
    "type": "MultiLineString",
    "coordinates": [
      [
        [
          -0.10900497436523438,
          51.520173035107824
        ],
        [
          -0.11295318603515625,
          51.5072466571743
        ],
        

      ]
    ]
  }
}


function style(feature) {
    return {
        fillColor: getColor(feature.properties.density),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}

function getColor(d) {
    return d > 1000 ? '#800026' :
           d > 500  ? '#BD0026' :
           d > 200  ? '#E31A1C' :
           d > 100  ? '#FC4E2A' :
           d > 50   ? '#FD8D3C' :
           d > 20   ? '#FEB24C' :
           d > 10   ? '#FED976' :
                      '#FFEDA0';
}

// highlight on mouseOver
function highlightFeature (e) {
  var layer = e.target;
  console.log('zoom')
  layer.setStyle({
    weight: 5,
    color: 'black',
    dashArray: '',
    fillOpacity: 1
  });
}

// reset default style on mouseOut
function resetHighlight (component, e) {
	console.log(component.refs.geojson);
  GeoJSON.resetStyle(e.target);
  // how to encapsulate GeoJson component/object?
}

function zoomToFeature (e) {
    const { data } = this.props;
    let zoom = data.params.zoom;
    console.log(zoom)
  //zoom(e.target)
  // map.fitBounds(e.target.getBounds());
  // how to encapsulate Map component/object?
}

function onEachFeature (component, feature, layer) {
  layer.on({
    mouseover: highlightFeature(),
    mouseout: resetHighlight.bind(null, component),
    click: zoomToFeature()
  });
}


//main component
class ViennaPoliLynes extends Component {
  onMouseOut = (e) => {
  	console.log('onMouseOut', e)
  }

  onMouseOver = (e) => {
  	console.log('onMouseOver', e)
  }

  render() {
    let testMeJSON = testMeJSON;
    const testMe = geojsonDataByLines.features.map((feature, index) => (
        <Polyline positions={feature.geometry.coordinates} color={feature.properties.color}  key={index} />
    ))
    /*
    const testMe2 = geojsonDataByLines.features.map((feature, index) => (
        <GeoJSON data={feature.geometry.coordinates}  style={style} ref="geojson" key={index} onEachFeature={onEachFeature.bind(null, this)}>

        </GeoJSON>
    ))
*/
    return (
      <div>
        {testMe}
        <GeoJSON data={polygon} style={style} ref="geojson" onMouseOut={this.onMouseOut}
          onMouseOver={this.onMouseOver} >

        </GeoJSON>
        <CustomInfoControl data={geojsonDataByLines.features}  onEachFeature={onEachFeature.bind(null, this)}/>
      </div>
    );
  }
}

export default ViennaPoliLynes;


//-----------------------------------------------------------
/*
  highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
  }
  resetHighlight(e) {
    GeoJSON.resetStyle(e.target);
  }
  zoomToFeature(e) {
  //  map.fitBounds(e.target.getBounds());
  }
  onEachFeature(feature, layer) {
    layer.on({
        mouseover: this.highlightFeature,
        mouseout: this.resetHighlight,
        click: this.zoomToFeature
    });
  }
*/
//----------------------------------------------------------
