import React from 'react';

const HoroscopeHeader = React.createClass({

  render() {
    return (
      <div className="horoscope-header">
        <div className="header-text">
          <h1>Weekly Horoscope</h1>
          <p>Read your fortune here today!</p>
        </div>
      </div>
    );
  }
});

export default HoroscopeHeader;
