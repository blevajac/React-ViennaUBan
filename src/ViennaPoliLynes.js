import React, { Component } from 'react';
import { Polyline, Tooltip } from 'react-leaflet';


//data
import geojsonDataByLines from './vienna_metro_lines_byLines.json';

//main component
class ViennaPoliLynes extends Component {
  render() {
    const metroLinesMaker = geojsonDataByLines.features.map((feature, index) => (
        <Polyline positions={feature.geometry.coordinates} color={feature.properties.color}  key={index} >
              <Tooltip sticky>
                <span>Metro line: {feature.properties.name}</span>
              </Tooltip>
        </Polyline>
    ));

    return (
      <div>
        {metroLinesMaker}
      </div>
    );
  }
}

export default ViennaPoliLynes;

/*
const testMe2 = geojsonDataByLines.features.map((feature, index) => (
    <GeoJSON data={feature.geometry.coordinates}   ref="geojson" key={index} >

    </GeoJSON>
))
*/
