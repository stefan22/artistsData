import TopTracks from '../src/js/top-tracks';
import getReq from '../__mocks__/get-request';
import 'babel-polyfill';
import axios from 'axios';

describe('TopTracks', () => {
  let topTracks = new TopTracks();
	// instance
	it('should return a new instance of TopTracks', () => {
		expect(topTracks).toBeInstanceOf(TopTracks);
  });
  // typeof
	it('should return typeof topTracks equals "Function"', () => {
		expect(typeof topTracks).toEqual('object');
	});
	it('should return all the new instance properties for topTracks', () => {
		expect(topTracks).toEqual({
			trackname: undefined,
			duration: undefined,
			listeners: undefined,
			track_mbid: undefined,
			artist_name: undefined,
			artist_mbid: undefined,
			artist_url: undefined,
			smImg: undefined,
      mdImg: undefined,
      lgImg: undefined,
		});
	});
	it('should find "artist_name" among the instance key properties', () => {
		expect(Object.keys(topTracks)).toContain('artistName');
	});

	// gettopTracks
	it('should check whether "gettopTracks" is defined', () => {
		expect(topTracks.getTopTracks).toBeDefined();
	});
	it('should return "gettopTracks" typeof equals a "Function"', () => {
		expect(typeof topTracks.getTopTracks).toEqual('function');
  });

  it('should fetch track named "Thank U, Next"', () => {
    axios.get(getReq.api2).then(res => {
      expect.assertions(1);
      let trak = res.track.name;
      expect(trak).resolves.toBe('Thank U, Next');
    });
  });
	// displaytopTracks
	it('should check whether "displayTopTracks" is defined', () => {
		expect(topTracks.displayTopTracks).toBeDefined();
	});
	it('should return "displayTopTracks" typeof equals a "Function"', () => {
		expect(typeof topTracks.displayTopTracks).toEqual('function');
	});



});
