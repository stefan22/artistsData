console.log('..index.js.');

// displays top 25 ranking artists / api call
import TopArtists from './js/top-artists';













const getTopArtists = () => {
  let artists = new TopArtists();
  let displayTopArtists = artists.getTopArtists();
  return displayTopArtists;
};




// events - call getTopArtists at pg load
document.addEventListener('DOMContentLoaded', getTopArtists, false);
