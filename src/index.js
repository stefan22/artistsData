
console.log('..index.js.');

// displays top 25 ranking artists / api call
import TopArtists from './js/top-artists';
// displays top 50 top tracks info / api call
import TopTracks from './js/top-tracks';
// artist info
import ArtistBio from './js/artist/artist-bio';







const headingHighlight = (table) => {
  if(table == 'tracks') {
    document.querySelector('.heading h2')
      .innerHTML = '<h2>Top Artists & <span class="red">Top Tracks</span> </h2><small>tables</small>';
  }
  else if (table == 'artists') {
    document.querySelector('.heading h2')
      .innerHTML = '<h2><span class="red">Top Artists</span> & Top Tracks </h2><small>tables</small>';
  }

};

const getTopTracks = () => {
  let tracks = new TopTracks();
  document.getElementById('top-artists').style.display = 'none';
  document.getElementById('top-tracks').style.display = 'block';
  headingHighlight('tracks');
  return tracks.getTopTracks();
};

const getTopArtists = () => {
  let artists = new TopArtists();
  document.getElementById('top-tracks').style.display = 'none';
  document.getElementById('top-artists').style.display = 'block';
  headingHighlight('artists');
  return artists.getTopArtists();
};

const artistBio = () => {
  let bio = new ArtistBio();
  bio.getArtistBio();

}; //artistBio


// init with topArtists at page load
const initFn = {
  init: () => {
    getTopArtists();
  },
  topTracks: () => {
    getTopTracks();
  }
};


const isTableClick = (e) => {
  let tc = e.target.textContent;
  if(tc.indexOf('Artists') !== -1) {
    return getTopArtists();
  }
  else if (tc.indexOf('Tracks') !== -1 ) {
    return getTopTracks();
  }
  else if(tc.indexOf('Bio') !== -1) {
    return artistBio();
  }
};




// buttons
const toplinks = document.querySelectorAll('.nav-list')[0];
toplinks.addEventListener('click', isTableClick, false);

// events - call getTopArtists at pg load
document.addEventListener('DOMContentLoaded', initFn.init, false);
