import React, { Component } from 'react';
import { Map, TileLayer, GeoJSON, LayersControl, LayerGroup} from 'react-leaflet';

//components
import ViennaMapStations from './ViennaMapStations';
import ViennaPoliLynes from './ViennaPoliLynes';

//custom map components
import CustomInfoControl from './customMapControls/CustomInfoControl';
import CustomLegendControl from './customMapControls/CustomLegendControl';
import CustomControlZoom from './customMapControls/CustomControlZoom';
import CustomControlScale from './customMapControls/CustomControlScale';

//css
import '../../css/components/map.css'

//data
import geojsonData from '../../data/vienna_metro_lines.json';

//--------------
// store the map configuration properties in an object,
// we could also move this to a separate file & import it if desired.
let config = {};
config.params = {
  center: [ 48.20849, 16.37208 ],
  zoomControl: false,
  zoom: 12,
  maxZoom: 19,
  minZoom: 10,
  scrollwheel: false,
  legends: true,
  infoControl: false,
  attributionControl: true
};
config.tileLayer = {
  uri: 'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
  uriDark: 'http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',
  params: {
    minZoom: 11,
    attribution: '&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors',
    id: '',
    accessToken: ''
  }
};

//--------------------------------------
//After zoomIn or zoomOute resets the map to its defined position
const DEFAULT_VIEWPORT = {
  center: [ 48.20849, 16.37208 ],
  zoom: 12,
}
//--------------------------------------
const { BaseLayer, Overlay } = LayersControl;

//main component
class SimpleExample extends Component {
  constructor() {
    super();
    this.state = {
        map: config,
        geojsonData: null,
        numEntrances: null,
        animate: true,
        latlng: {
          lat: 48.20849,
          lng: 16.37208,
        },
        listDataFromChild: null
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    this.setState({
      numEntrances: geojsonData.features.length,
      geojsonData,
      viewport: DEFAULT_VIEWPORT,
    });
  }

  mapStationData() {
    //sends individual data to MapStations component for rendering on the map
    return geojsonData.features.map((cord, index) => {
        return (
              <ViennaMapStations key={index} mapStationData={cord} />
        );
    });
  }
//---------------------------------------------------------
  //After zoomIn or zoomOute resets the map to its defined position
  onClickReset = () => {
    this.setState({ viewport: DEFAULT_VIEWPORT })
  }

  onViewportChanged = viewport => {
    this.setState({ viewport })
  }
//---------------------------------------------------------
//---------------------------------------------------------
  //animate controls
  handleClick = e => {
    this.setState({
      latlng: e.latlng,
      viewport: DEFAULT_VIEWPORT
    })
  }
//---------------------------------------------------------
//---------------------------------------------------------
  myCallback = (dataFromChild) => {
      this.setState({ listDataFromChild: dataFromChild });      
  }
//---------------------------------------------------------
  render() {
    const configParams = this.state.map.params;
    const configTileLayer = this.state.map.tileLayer;
    const position = this.state.latlng;

    return (
      <Map center={position} zoom={configParams.zoom} minZoom={configParams.minZoom} maxZoom={configParams.maxZoom} zoomControl={configParams.zoomControl}
           onViewportChanged={this.onViewportChanged}  viewport={this.state.viewport}
           animate={this.state.animate} onClick={this.handleClick}
      >
          <LayersControl position="topright">
              <BaseLayer checked name="Carto - BaseMap Light">
                <TileLayer
                  attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                  url={configTileLayer.uri}
                />
              </BaseLayer>
              <BaseLayer name="Carto - BaseMap Dark">
                <TileLayer
                  attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                  url={configTileLayer.uriDark}
                />
              </BaseLayer>

              <Overlay checked name="Vienna Metro Line - Lines">
                  <LayerGroup>
                    <ViennaPoliLynes changedMetroLine={this.state.listDataFromChild}>
                      <GeoJSON data={geojsonData} />
                    </ViennaPoliLynes>
                  </LayerGroup>
              </Overlay>
              <Overlay checked name="Vienna Metro Line - Stations">
                  <LayerGroup>
                      {this.mapStationData()}
                  </LayerGroup>
              </Overlay>

          </LayersControl>

          <CustomInfoControl callbackFromParent={this.myCallback}/>
          <CustomLegendControl />
          <CustomControlZoom />
          <CustomControlScale />
      </Map>
    );
  }
}

export default SimpleExample;
