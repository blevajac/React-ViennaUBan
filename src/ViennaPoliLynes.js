import React, { Component } from 'react';
import { Polyline } from 'react-leaflet';

//data
import geojsonDataByLines from './vienna_metro_lines_byLines.json';

//main component
class ViennaPoliLynes extends Component {
  constructor() {
    super();
    this.state = {
        geojsonDataByLines: geojsonDataByLines

    };
  }

  polylineLineMaker() {
    const geojsonDataByLines = this.state.geojsonDataByLines;

    const testMe = geojsonDataByLines.features.map((cord) => {
        return cord.geometry.coordinates;
    });

    return testMe;
  }

  polylineLineColor() {
    const geojsonDataByLines = this.state.geojsonDataByLines;

    const testMe = geojsonDataByLines.features.map((cord) => {
        console.log(cord.properties.color)
        return cord.properties.color;
    });

    return testMe;
  }

  render() {

    return (
        <Polyline positions={this.polylineLineMaker()} color={this.polylineLineColor()}>

        </Polyline>
    );
  }
}

export default ViennaPoliLynes;
