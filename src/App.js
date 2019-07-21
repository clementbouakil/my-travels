import React, { Component } from 'react';
import './App.css';

import Travel from './Travel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Travel 
          destination="Tokyo"
          country="Japan"
          photo="https://red-point.fr/wp-content/uploads/2017/02/tokyo-mud-bath-bar-mudbath0716.jpg"
          distance="9 710 km"
        />
        <Travel 
          destination="New York"
          country="USA"
          photo="https://cdn.getyourguide.com/img/tour_img-1667715-146.jpg"
          distance="5 834 km"
        />
      </div>
    )
  }
}

export default App;