import React, { Component } from 'react';
import { Popup, CircleMarker, Tooltip } from 'react-leaflet';

class ViennaMapStations extends Component {
  render() {
    const { mapStationData } = this.props;

    //map coordinates
    const mapCords = mapStationData.geometry.coordinates;
    const position = [mapCords[0], mapCords[1]];
    //discription
    const mapName = mapStationData.properties.name;
    const mapColor = mapStationData.properties.color;

    return(
      <CircleMarker center={position} radius={6} fillColor={mapColor} color={'#fff'} weight={1} opacity={0.5} fillOpacity={0.8} >
          <Tooltip sticky>
            <span>Metro line: {mapName}</span>
          </Tooltip>
          <Popup>
              <span>Metro Station: {mapName}.</span>
          </Popup>

      </CircleMarker>
    );
  }
}

export default ViennaMapStations;
