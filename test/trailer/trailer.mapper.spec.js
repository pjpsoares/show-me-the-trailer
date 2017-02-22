const chai = require('chai');
const expect = chai.expect;
const trailerMapper = require('../../src/trailer/trailer.mapper');
const Trailer = require('../../src/trailer/trailer.model');

describe('trailer mapper', () => {
  describe('#mapFromTMDB', () => {
    describe('when we have a valid object', () => {
      const SOURCE = 123;
      const MOCKED_OBJECT = {
        youtube: [
          {
            source: SOURCE
          }
        ]
      };

      it('should map to a Movie object', () => {
        expect(trailerMapper.mapFromTMDB(MOCKED_OBJECT)).to.be.an.instanceof(Trailer);
      });

      it('should have the imdb id propperly mapped to the Movie object', () => {
        expect(trailerMapper.mapFromTMDB(MOCKED_OBJECT).getLink())
          .to.eql(`https://www.youtube.com/watch?v=${SOURCE}`);
      });
    });

    // What defines an invalid object is here simplified as a single example to simplify
    describe('when we dont have a valid object', () => {
      it('should return undefined', () => {
        expect(trailerMapper.mapFromTMDB()).to.be.undefined;
      });
    });
  });
});
