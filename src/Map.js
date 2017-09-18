import React, { Component } from 'react';
import { Map, TileLayer, GeoJSON } from 'react-leaflet';

//components
import MapStations from './MapStations';
import ViennaPoliLynes from './ViennaPoliLynes';


import CustomLegendControl from './CustomLegendControl';
//css
import './css/components/map.css'

//data
import geojsonData from './vienna_metro_lines.json';

//--------------
// store the map configuration properties in an object,
// we could also move this to a separate file & import it if desired.
let config = {};
config.params = {
  center: [ 48.20849, 16.37208 ],
  zoomControl: false,
  zoom: 12,
  //maxZoom: 19,
  //minZoom: 10,
  scrollwheel: false,
  legends: true,
  infoControl: false,
  attributionControl: true
};
config.tileLayer = {
  uri: 'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
  params: {
    minZoom: 11,
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
    id: '',
    accessToken: ''
  }
};

//main component
class SimpleExample extends Component {
  constructor() {
    super();
    this.state = {
        map: config,
        geojsonData: null,
        numEntrances: null
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    this.setState({
      numEntrances: geojsonData.features.length,
      geojsonData,
    });
  }

  mapStationData() {
    //sends individual data to MapStations component for rendering on the map
    return geojsonData.features.map((cord, index) => {
        return (
              <MapStations key={index} mapStationData={cord} >
              </MapStations>
        );
    });
  }

  render() {
    const configParams = this.state.map.params;
    const configTileLayer = this.state.map.tileLayer;
    const position = [configParams.center[0], configParams.center[1]];



    return (
      <Map center={position} zoom={configParams.zoom} minZoom={configParams.minZoom} maxZoom={configParams.maxZoom} >
        <TileLayer
          attribution={configTileLayer.attribution}
          url={configTileLayer.uri}
        />
        <ViennaPoliLynes >
          <GeoJSON data={geojsonData} />
        </ViennaPoliLynes>
        <CustomLegendControl />
        {this.mapStationData()}
      </Map>
    );
  }
}

export default SimpleExample;
