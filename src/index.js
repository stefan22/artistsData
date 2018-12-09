console.log('..index.js.');

// displays top 25 ranking artists / api call
import TopArtists from './js/top-artists';
import axios from 'axios';



//let user = axios.get('https://jsonplaceholder.typicode.com/users/4');



















const getTopArtists = () => {
  let artists = new TopArtists();
  let displayTopArtists = artists.getTopArtists();
  return displayTopArtists;
};

export default getTopArtists;


// events - call getTopArtists at pg load
document.addEventListener('DOMContentLoaded', getTopArtists, false);
