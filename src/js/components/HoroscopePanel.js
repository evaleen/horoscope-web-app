import React from 'react';

import HoroscopeTemplate from './HoroscopeTemplate';

const HoroscopePanel = React.createClass({

  propTypes: {
    starSigns: React.PropTypes.array.isRequired
  },


  renderStarSignTemplates() {
    const { starSigns } = this.props;

    return starSigns.map((starSign) =>
      <div key={starSign.name}>
        <HoroscopeTemplate
          starSign={starSign}
        />
    </div>
    );
  },

  render() {
    const starSignTemplates = this.renderStarSignTemplates();

    return (
      <div className="horoscope-panel">
        {starSignTemplates}
      </div>
    );
  }
});

export default HoroscopePanel;
