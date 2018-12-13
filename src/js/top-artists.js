console.log('..top-artists.js.');
const APIKEY = require('./artist/api-key.js');

let tacontainer = [];
class TopArtists {
  constructor(topName, topPlaycount, topListeners, topMbid, topUrl, topStreamable, topSmImg, topMdImg, topLgImg) {
    this.topName = topName || undefined;
    this.topPlaycount = topPlaycount || undefined;
    this.topListeners = topListeners || undefined;
    this.topMbid = topMbid || undefined;
    this.topUrl = topUrl || undefined;
    this.topStreamable = topStreamable || undefined;
    this.topSmImg = topSmImg || undefined;
    this.topMdImg = topMdImg || undefined;
    this.topLgImg = topLgImg || undefined;
  }

  //api call
  getTopArtists() {
    const KEY = String(APIKEY.APIKEY);
    if (tacontainer.length > 5) {
      this.displayTopArtists(tacontainer);
    }
    else {
      let dataObj = {};
      let xhr = new XMLHttpRequest();
      xhr.overrideMimeType('application/json');
      xhr.onreadystatechange = () => {
        if (xhr.status == 200 && xhr.readyState == 4) {
          dataObj = JSON.parse(xhr.responseText);
          // pass them to arry
          dataObj.artists.artist.map((item) => {
            tacontainer.push(item);
          });
          // console.log('\ntacontainer:\n\n', tacontainer);
          this.displayTopArtists(dataObj);
          return dataObj;
        }
      };
      xhr.open(
        'GET',
        'http://ws.audioscrobbler.com/2.0/?method=chart.getTopArtists&api_key=' +
        KEY +
            '&limit=25&page1&format=json'
      );
      xhr.send(null);
    }
  } //getTopArtists

  displayTopArtists(data) {
    if (tacontainer.length > 5) {
      data = tacontainer;
    } else {
      data = data.artists.artist;
    }

    let topArtists = document.getElementById('top-artists');
    topArtists.innerHTML = `
        <thead><tr>
          <th>#</th>
          <th>topName</th>
          <th>topPlaycount</th>
          <th>topListeners</th>
          <th>topMbid</th>
          <th>topUrl</th>
          <th>topStreamable</th>
          <th colspan="2">topImages (sm - md - lg)</th>
        </tr></thead>`;

    const shortMbid = (n) => {
      let a = n.split('-');
      a = a[a.length-1];
      return (a !== '') ? a : 'n/a';
    };


    // topArtists tbody
    for (let i = 0; i < data.length; i++) {
      topArtists.innerHTML += `
          <tr>
            <td>${i + 1}</td>
            <td>${data[i].name}</td>
            <td>${data[i].playcount}</td>
            <td>${data[i].listeners}</td>
            <td>${shortMbid(data[i].mbid)}</td>
            <td>${data[i].url}</td>
            <td>${(data[i].streamable !== '0' ? data[i].streamable : 'no')}</td>
            <td class="imgs" colspan="2">
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

    topArtists.innerHTML += '</tr></tbody>';
    topArtists.style.visibility = 'visible';
    return true;
  } //displayTopArtists

} // Artists

//public
export default TopArtists;
