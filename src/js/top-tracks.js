console.clear();
console.log('.. top-tracks.');
import axios from 'axios';

const tracksApi = 'http://ws.audioscrobbler.com/2.0/?method=chart.getTopTracks&api_key=06f1dc77ed67d80a215a3c3b6aa901d3&format=json';

class TopTracks {
  constructor
  (
    trackname,duration,playcount,listeners,trackMbid,artistName, artistMbid,artistUrl,smImg,mdImg,lgImg
  )
  {
    this.trackname = trackname || undefined;
    this.duration = duration || undefined;
    this.playcount = playcount || undefined;
    this.listeners = listeners || undefined;
    this.trackMbid = trackMbid || undefined;
    this.artistName = artistName || undefined;
    this.artistMbid = artistMbid || undefined;
    this.artistUrl = artistUrl || undefined;
    this.smImg = smImg || undefined;
    this.mdImg = mdImg || undefined;
    this.lgImg = lgImg || undefined;
  }

  getTopTracks() {
    let traks = axios.get(tracksApi);
    traks
      .then((res) => {
        let tks = res.data;
        //console.log(tks);
        this.displayTopTracks(tks);
        return tks;
      }).catch((error) => {
        let err = error.message;
        console.log(err);
      });

  } //getTopTracks

  displayTopTracks(data) {
    // console.log(data);
    data = data.tracks.track;
    let topTracks = document.getElementById('top-tracks');
    // topTracks thead
    topTracks.innerHTML = `
        <thead><tr>
          <th>#</th>
          <th>trackname</th>
          <th>duration</th>
          <th>playcount</th>
          <th>listeners</th>
          <th>track_mbid</th>
          <th>artist_name</th>
          <th>artist_mbid</th>
          <th>artist_url</th>
          <th colspan="3">image (sm - md - lg)</th>
        </tr></thead>`;

    let shortMbid = (id) => {
      let d = id.split('-');
      d = d[d.length - 1];
      return (d !== '' && d.length > 0) ? d : 'n/a';
    };

    // topTracks tbody
    for (let i = 0; i < data.length; i++) {
      topTracks.innerHTML += `
          <tr>
            <td>${i + 1}</td>
            <td>${data[i].name}</td>
            <td>${(data[i].duration !== '0') ? data[i].duration : 'n/a'}</td>
            <td>${data[i].playcount}</td>
            <td>${data[i].listeners}</td>
            <td>${(data[i].mbid) ? shortMbid(data[i].mbid) : 'n/a'}</td>
            <td>${data[i].artist.name}</td>
            <td>${shortMbid(data[i].artist.mbid)}</td>
            <td>${data[i].artist.url}</td>
            <td class="imgs" colspan="3">
              <table>
                <tr>
                  <td>
                  ${data[i].image[0]['#text']}
                  </td>
                </tr>
                <tr>
                  <td>
                  ${data[i].image[1]['#text']}
                  </td>
                </tr>
                <tr>
                  <td>
                  ${data[i].image[2]['#text']}
                  </td>
                </tr>
              </table>
            </td>`;
    } //for

    topTracks.innerHTML += '</tr></tbody>';
    topTracks.style.visibility = 'visible';
  } //displayTopTracks






} // TopTracks



export default TopTracks;
