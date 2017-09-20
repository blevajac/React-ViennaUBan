import React, { Component } from 'react';
import { Polyline, Tooltip } from 'react-leaflet';


//data
import geojsonDataByLines from '../../data/vienna_metro_lines_byLines.json';

//main component
class ViennaPoliLynes extends Component {
  render() {
    const { changedMetroLine } = this.props;
    const newUserlookMetroLine = changedMetroLine;
    let metroLinesMaker = null;


    if(changedMetroLine === null || changedMetroLine === 'All Metro Lines') {
        metroLinesMaker = geojsonDataByLines.features.map((feature, index) => (
           <Polyline positions={feature.geometry.coordinates} color={feature.properties.color}  key={index} >
                 <Tooltip sticky>
                   <span>Metro line: {feature.properties.name}</span>
                 </Tooltip>
           </Polyline>
         ));
    } else {
        metroLinesMaker = geojsonDataByLines.features.map(function(feature, index) {
          let hmm = null;
          if(feature.properties.name === newUserlookMetroLine) {
                return hmm = (
                  <Polyline positions={feature.geometry.coordinates} color={feature.properties.color}  key={index} >
                      <Tooltip sticky>
                        <span>Metro line: {feature.properties.name}</span>
                      </Tooltip>
                  </Polyline>
                )
          }
          return hmm;
      });
    }

    return (
      <div>
        {metroLinesMaker}
      </div>
    );
  }
}

export default ViennaPoliLynes;
