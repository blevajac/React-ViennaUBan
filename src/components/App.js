import React, { Component } from 'react';

//components
import Map from './mapComponents/Map';
import Header from './infocomponents/Header';

// App component
class App extends Component {
  render() {
    return (
      <div>
          <Header />
          <Map />
      </div>
    );
  }
}

export default App;
