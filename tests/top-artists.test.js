import TopArtists from '../src/js/top-artists';
import getReq from '../__mocks__/get-request';
import 'babel-polyfill';
import axios from 'axios';

describe('TopArtists', () => {
  let topArtists = new TopArtists();
  // instance
  it('should return a new instance of TopArtists', () => {
    expect(topArtists).toBeInstanceOf(TopArtists);
  });
  it('should return typeof TopArtists equals "Function"', () => {
    expect(typeof TopArtists).toEqual('function');
  });
  it('should return all the new instance properties for topArtists', () => {
    expect(topArtists).toEqual(
     {
        "lgImg": undefined,
        "listeners": undefined,
        "mbid": undefined,
        "mdImg": undefined,
        "name": undefined,
        "playcount": undefined,
        "smImg": undefined,
        "streamable": undefined,
        "url": undefined
      }
    );
  });
  it('should find "name" among the instance key properties', () => {
    expect(Object.keys(topArtists)).toContain('name');
  });

  // getTopArtists
  it('should check whether "getTopArtists" is defined', () => {
    expect(topArtists.getTopArtists).toBeDefined();
  });
  it('should return "getTopArtists" typeof equals a "Function"', () => {
    expect(typeof topArtists.getTopArtists).toEqual('function');
  });

  it('should fetch artist named "Ariana Grande"', () => {
    axios.get(getReq.api1).then(res => {
      if(res.data.status != 200) {
        throw '404';
      }
      expect.assertions(1);
      let grande = res.artist.name;
      expect(grande).resolves.toBe('Ariana Grande');
    });
  });
  // displayTopArtists
  it('should check whether "displayTopArtists" is defined', () => {
    expect(topArtists.displayTopArtists).toBeDefined();
  });
  it('should return "displayTopArtists" typeof equals a "Function"', () => {
    expect(typeof topArtists.displayTopArtists).toEqual('function');
  });


});
