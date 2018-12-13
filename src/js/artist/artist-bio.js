const APIKEY = require('./api-key.js');

let bioContainer = [];
class ArtistBio {
  constructor(name, mbid, bioPublished, bioSummary, bioContent) {
    this.name = name;
    this.mbid = mbid;
    this.bioPublished = bioPublished;
    this.bioContent = bioContent;
    this.bioSummary = bioSummary;
  }

  getArtistBio() {
    if (bioContainer.length !== 0) {
      bioContainer.filter((itm) => {
        // temporarily using Ariana Grande
        if (itm.artist.name == 'Ariana Grande') {
          return this.createTemplate(itm);
        }
      });
    } else {
      let KEY = String(APIKEY.APIKEY);
      let artistData = {};
      let xhr = new XMLHttpRequest();
      xhr.overrideMimeType('application/json');
      xhr.onreadystatechange = () => {
        if (xhr.status == 200 && xhr.readyState == 4) {
          artistData = JSON.parse(xhr.responseText);
          bioContainer.push(artistData);
          this.createTemplate(bioContainer);
          return artistData;
        } //if
      };
      xhr.open(
        'GET',
        'http://ws.audioscrobbler.com/2.0/?method=artist.getInfo&artist=ariana+grande&api_key=' + KEY + '&format=json'
      );
      xhr.send(null);
    } //else
  } //getArtistBio


  createTemplate(bio) {
    if (bioContainer.length !== 0) {
      bio = bioContainer;
    }
    console.log(bio);
    let ab = document.getElementById('artist-bio');
    bio.forEach((artist, idx) => {
      //foreach record
      let markup = this.createRecords(artist, idx);
      console.log(markup);
      //append to dom
      ab.innerHTML = markup;
    });
  }

  createRecords(data, idx) {
    return `
      <div class="bio-title"><h2>${data.artist.name}</h2></div>
      <div class="bio-summary">
        <p>
          ${data.artist.bio.summary}
        </p>
      </div>

    `;

  }







} //ArtistInfo



export default ArtistBio;
