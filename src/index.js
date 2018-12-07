console.log('..index.js.');

class Artists {
  constructor(name,playcount ,listeners,mbid,url,streamable,smImg,mdImg,lgImg)
  {
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
      if(xhr.status == 200 && xhr.readyState == 4) {
        dataObj = JSON.parse(xhr.responseText);
        this.displayTopArtists(dataObj);
      }
    };
    xhr.open('GET','http://ws.audioscrobbler.com/2.0/?method=chart.getTopArtists&api_key=' + key + '&limit=25&page1&format=json');
    xhr.send(null);

  } //getTopArtists

  displayTopArtists(data) {
    console.log(data);
    data = data.artists.artist;
    let topArtists = document.getElementById('top-artists');
    topArtists.innerHTML = `
      <table>
        <tr>
          <th>Name</th>
          <th>Playcount</th>
          <th>Listeners</th>
          <th>Mbid</th>
          <th>Url</th>
          <th>Streamable</th>
          <th>Small Img</th>
          <th>Medium Img</th>
          <th>Large Img</th>
        </tr>
        <tr>
          <td>${data[0].name}</td>
          <td>${data[0].playcount}</td>
          <td>${data[0].listeners}</td>
          <td>${data[0].mbid}</td>
          <td>${data[0].url}</td>
          <td>${data[0].streamable}</td>
          <td>${data[0].image[0]['#text']}</td>
          <td>${data[0].image[1]['#text']}</td>
          <td>${data[0].image[2]['#text']}</td>
        </tr>
      </table>
    `;

  } //displayTopArtists


} // Artists





const getTopArtists = () => {
  const artists = new Artists();
  let displayTopArtists = artists.getTopArtists();
  console.log(displayTopArtists);
};






document.addEventListener('DOMContentLoaded', getTopArtists, false);











//public
export default Artists;



