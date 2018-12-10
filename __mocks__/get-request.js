import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
// sets mock adapter on def instance
let mock = new MockAdapter(axios);

module.exports = {

  api1: 'http://ws.audioscrobbler.com/2.0/?method=chart.getTopArtists&api_key=06f1dc77ed67d80a215a3c3b6aa901d3&limit=25&page1&format=json',

  api2: 'http://ws.audioscrobbler.com/2.0/?method=chart.getTopTracks&api_key=06f1dc77ed67d80a215a3c3b6aa901d3&limit=25&page1&format=json',

  axiosGetReq: (api) => {
    mock.onGet('api').reply(200, {
      artist: {
        name: 'Ariana Grande'
      },
      track: {
        name: 'Thank U, Next'
      }
    });

  }

};


