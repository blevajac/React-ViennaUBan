import React, { Component } from 'react';
import { Marker, Popup, CircleMarker } from 'react-leaflet';

class MapStations extends Component {
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

          <Popup>
              <span>Metro Station: {mapName}.</span>
          </Popup>

      </CircleMarker>
    );
  }
}

export default MapStations;

/*
<CircleMarker center={position} radius={6} fillColor={'red'} color={'#fff'} weight={1} opacity={0.5} fillOpacity={0.8} >
  <Marker position={ position }>
    <Popup>
        <span>Metro Station: {mapName}.</span>
    </Popup>
  </Marker>
</CircleMarker>
*/
