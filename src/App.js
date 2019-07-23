import React, { Component } from 'react';
import './App.css';

import Travel from './Travel';
import Travels from './Travels';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Travel 
          destination="Bruxelles"
          country="Belgium"
          photo="https://media.routard.com/image/80/0/bruxelles-grand-place.1537800.w740.jpg"
          distance="400 km"
        />
        <Travels />
      </div>
    )
  }
}

export default App;