import React from 'react';

import HoroscopeApiClient from '../../api/HoroscopeApiClient';

const HoroscopeTemplate = React.createClass({

  PropTypes: {
     starSign: React.PropTypes.object.isRequired
  },

  getInitialState() {
    return {
      horoscope: null
    };
  },

  componentWillMount() {
    HoroscopeApiClient.getHoroscope(this.props.starSign.name, (response) => {
      this.setState({
        horoscope: response.horoscope.horoscope
      });
    });
  },

  render() {
    const { starSign } = this.props;

    return (
      <div className="horoscope-template">
        <div className="star-sign-header">
          <h2>{starSign.name}</h2>
        </div>
        <img
          className="horoscope-img"
          src={require(`../../img/${starSign.name}.png`)}
          alt={starSign.name}
        />
      <div className="horoscope-dates">
        <p>{starSign.startDate} - {starSign.endDate}</p>
      </div>
        <div className="horoscope-text">
          <p>{this.state.horoscope}</p>
        </div>
      </div>
    );
  }
});

export default HoroscopeTemplate;
