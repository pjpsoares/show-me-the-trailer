const chai = require('chai');
const expect = chai.expect;
const movieMapper = require('../../../src/shared/movie/movie.mapper');
const Movie = require('../../../src/shared/movie/movie.model');

describe('movie mapper', () => {
  describe('#mapFromViaplay', () => {
    describe('when we have a valid object', () => {
      const IMDB_ID = 123;
      const MOCKED_OBJECT = {
        '_embedded': {
          'viaplay:blocks': [
            {
              '_embedded': {
                'viaplay:product': {
                  content: {
                    imdb: {
                      id: IMDB_ID
                    }
                  }
                }
              }
            }
          ]
        }
      };

      it('should map to a Movie object', () => {
        expect(movieMapper.mapFromViaplay(MOCKED_OBJECT)).to.be.an.instanceof(Movie);
      });

      it('should have the imdb id propperly mapped to the Movie object', () => {
        expect(movieMapper.mapFromViaplay(MOCKED_OBJECT).getImdbId()).to.eql(IMDB_ID);
      });
    });

    // What defines an invalid object is here simplified as a single example to simplify
    describe('when we dont have a valid object', () => {
      const MOCKED_OBJECT = {
        '_embedded': {}
      };

      it('should throw an error', () => {
        expect(() => movieMapper.mapFromViaplay(MOCKED_OBJECT)).to.throw('Invalid object from the url');
      });
    });
  });
});
