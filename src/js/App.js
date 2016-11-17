import React, { Component } from 'react';

import HoroscopeHeader from './components/HoroscopeHeader';
import HoroscopePanel from './components/HoroscopePanel';


class App extends Component {

  render() {
    const starSigns = require('../json/starSigns.json');

    return (
      <div className='App'>
        <div className="horoscope-app">
          <HoroscopeHeader />
          <HoroscopePanel
            starSigns={starSigns.starSigns}
          />
        </div>
      </div>
    );
  }
}

export default App;
