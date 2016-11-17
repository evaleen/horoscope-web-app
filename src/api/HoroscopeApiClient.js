function getHoroscope(starSign, response) {

    return fetch(`https://afternoon-caverns-74530.herokuapp.com/${starSign}`, {
      accept: 'application/json'
    })
    .then(function(response) { //need to wait here
      return checkStatus(response);
    })
    .then(function(response) {
      return response.json();
    })
    .then(response);
  }

  function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      const error = new Error(`HTTP Error ${response.statusText}`);
      error.status = response.statusText;
      error.response = response;
      console.log(error);
      throw error;
    }
  }

const HoroscopeApiClient = { getHoroscope };
export default HoroscopeApiClient;
