console.clear();
console.log('.. top-tracks.');
import axios from 'axios';

const tracksApi = 'http://ws.audioscrobbler.com/2.0/?method=chart.getTopTracks&api_key=06f1dc77ed67d80a215a3c3b6aa901d3&format=json';
let tkcontainer =[];

class TopTracks {
  constructor
  (
    trakName,trakDuration,trakPlaycount,trakListeners,trakMbid,trakArtist, trakUrl,smImg,mdImg,lgImg
  )
  {
    this.trakName = trakName || undefined;
    this.trakDuration = trakDuration || undefined;
    this.trakPlaycount = trakPlaycount || undefined;
    this.trakListeners = trakListeners || undefined;
    this.trakMbid = trakMbid || undefined;
    this.trakArtist = trakArtist || undefined;
    this.trakUrl = trakUrl || undefined;
    this.smImg = smImg || undefined;
    this.mdImg = mdImg || undefined;
    this.lgImg = lgImg || undefined;
  }

  getTopTracks() {
    if (tkcontainer.length > 5) {
      this.displayTopTracks(tkcontainer);
    } else {

      let traks = axios.get(tracksApi);
      traks
        .then((res) => {
          let tks = res.data;
          // pass them container
          tks.tracks.track.map((item) => {
            tkcontainer.push(item);
          });
          console.log('\ntkcontainer:\n\n', tkcontainer);
          this.displayTopTracks(tks);
          return tks;
        }).catch((error) => {
          let err = error.message;
          console.log(err);
        });
    }

  } //getTopTracks

  displayTopTracks(data) {
    if (tkcontainer.length > 5) {
      data = tkcontainer;
    } else {
      data = data.tracks.track;
    }

    let topTracks = document.getElementById('top-tracks');
    // topTracks thead
    topTracks.innerHTML = `
        <thead><tr>
          <th>#</th>
          <th>trakName</th>
          <th>trakDuration</th>
          <th>trakPlaycount</th>
          <th>trakListeners</th>
          <th>trakMbid</th>
          <th>trakArtist</th>
          <th>trakMbid</th>
          <th>trakUrl</th>
          <th colspan="3">trakImage (sm - md - lg)</th>
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
