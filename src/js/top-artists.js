console.log('..top-artists.js.');

class TopArtists {
  constructor(name, playcount, listeners, mbid, url, streamable, smImg, mdImg, lgImg) {
    this.name = name;
    this.playcount = playcount;
    this.listeners = listeners;
    this.mbid = mbid;
    this.url = url;
    this.streamable = streamable;
    this.smImg = smImg;
    this.mdImg = mdImg;
    this.lgImg = lgImg;
  }

  //api call
  getTopArtists() {
    const key = '06f1dc77ed67d80a215a3c3b6aa901d3';
    let dataObj = {};
    let xhr = new XMLHttpRequest();
    xhr.overrideMimeType('application/json');
    xhr.onreadystatechange = () => {
      if (xhr.status == 200 && xhr.readyState == 4) {
        dataObj = JSON.parse(xhr.responseText);
        this.displayTopArtists(dataObj);
      }
    };
    xhr.open('GET', 'http://ws.audioscrobbler.com/2.0/?method=chart.getTopArtists&api_key=' + key + '&limit=25&page1&format=json');
    xhr.send(null);

  } //getTopArtists

  displayTopArtists(data) {
    console.log(data);
    data = data.artists.artist;
    let topArtists = document.getElementById('top-artists');
    // topArtists keys
    const takeys = Object.keys(data[0]);
    // topArtists thead
    topArtists.innerHTML = `
        <thead><tr>
          <th>#</th>
          <th>${takeys[0]}</th>
          <th>${takeys[1]}</th>
          <th>${takeys[2]}</th>
          <th>${takeys[3]}</th>
          <th>${takeys[4]}</th>
          <th>${takeys[5]}</th>
          <th colspan="2">${takeys[6]} (sm - md - lg)</th>
        </tr></thead>`;

    // topArtists tbody
    for (let i = 0; i < data.length; i++) {
      topArtists.innerHTML += `
          <tr>
            <td>${i+1}</td>
            <td>${data[i].name}</td>
            <td>${data[i].playcount}</td>
            <td>${data[i].listeners}</td>
            <td>${data[i].mbid}</td>
            <td>${data[i].url}</td>
            <td>${data[i].streamable}</td>
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

  } //displayTopArtists


} // Artists



















//public
export default TopArtists;
