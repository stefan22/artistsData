const APIKEY = require('./api-key.js');


class ArtistBio {
  constructor(name,mbid,bioPublished,bioSummary,bioContent) {
    this.name = name;
    this.mbid = mbid;
    this.bioPublished = bioPublished;
    this.bioContent = bioContent;
    this.bioSummary = bioSummary;
  }

  getArtistBio() {
    let KEY = String(APIKEY.APIKEY);
    let artistData = {};
    let xhr = new XMLHttpRequest();
    xhr.overrideMimeType('application/json');
    xhr.onreadystatechange = () => {
      if (xhr.status == 200 && xhr.readyState == 4) {
        artistData = JSON.parse(xhr.responseText);
        this.createTemplate(artistData);
        return artistData;
      } //if
    };
    xhr.open(
      'GET',
      'http://ws.audioscrobbler.com/2.0/?method=artist.getInfo&artist=ariana+grande&api_key=' + KEY + '&format=json'
    );
    xhr.send(null);

  } //getArtistInfo


  createTemplate(bio) {
    console.log(bio);

  }










} //ArtistInfo



export default ArtistBio;

