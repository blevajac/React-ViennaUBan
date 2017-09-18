import React, { Component } from 'react';
import { Polyline } from 'react-leaflet';

//data
import geojsonDataByLines from './vienna_metro_lines_byLines.json';

//main component
class ViennaPoliLynes extends Component {
  render() {
    return (
      <div>
        {geojsonDataByLines.features.map((feature) => (
            <Polyline
              positions={feature.geometry.coordinates}
              color={feature.properties.color}
              />
          ))}
      </div>
    );
  }
}

export default ViennaPoliLynes;
