import React, { Component } from 'react';

//components
import Header from './Header';

//css
import '../../css/infocomponents/about.css';

class About extends Component {
  render() {
    return (
        <div>
          <Header />
            <div className="about-aplikacija row">
              <div className=" large-12 column">
                <h1 className="page-title">React - Vienna Metro Lines</h1>
                <p className="about-paragraf-opis">
                  Is a Map Application to show the Metro Lines and Metro stations of the city of Vienna, Austria.
                  <br></br>
                  <br></br>
                  The Application shows all the Vienna Metro Lines (5 in total), and the Metro stations of these Lines.
                  The Metro Lines are represented with lines and the Metro Stations are represented with circular points on the map.
                  <br></br>
                  <br></br>
                  Each Metro Line and Station have its name shown when the user moves the mouse over it.
                  <br></br>
                  <br></br>
                  User functions:<br></br>
                  Top left corner: The user can, using the combo box choose to see only the individual metro lines he wants (as a default option, all map lines are shown to the user).
                  Top right corner: The user can change the visual look of the map. There are two map views:  the default map - white, and the other one - dark. The other function is to see the map without the Map Lines or the Map Points.
                </p>
                <p className="about-paragraf-opis">
                  The Map component used for building this APP was from <strong>Leaflet</strong>.
                  <br></br>
                  The Idea for building this small App came from the interest of trying to see some of the small possibility with map components.
                </p>
                <ul>
                    <li>
                        <a target="_blank" rel="noopener noreferrer" href="http://leafletjs.com/">Leaflet - a JavaScript library for interactive maps</a>
                    </li>
                    <li>
                        <a target="_blank" rel="noopener noreferrer" href="http://viennamap360.com/vienna-metro-map#.WcPKbjeCyUk">Vienna Metro / U Bahn Map</a> 
                    </li>
                </ul>
                <div className="devicon">
                    <i className="devicon-react-original" title="React"></i>
                    <i className="devicon-html5-plain" title="HTML"></i>
                    <i className="devicon-javascript-plain" title="JavaScript"></i>
                </div>
              </div>
            </div>
        </div>
    );
  }
}

export default About;
