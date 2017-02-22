const sinonChai = require('sinon-chai');
const chai = require('chai');
const expect = chai.expect;
const movieClient = require('../../src/shared/movie/movie.client');
const trailerClient = require('../../src/trailer/trailer.client');
const trailerService = require('../../src/trailer/trailer.service');
const Movie = require('../../src/shared/movie/movie.model');
const Trailer = require('../../src/trailer/trailer.model');
const sinon = require('sinon');
const Promise = require('bluebird');

chai.use(sinonChai);

describe('trailer service', () => {
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('get', () => {
    const URL_PARAM = 'http://some.url';
    const MOVIE = new Movie(123);
    const TRAILER = new Trailer();
    let result;

    beforeEach((done) => {
      sandbox.stub(movieClient, 'get').returns(Promise.resolve(MOVIE));
      sandbox.stub(trailerClient, 'get').returns(Promise.resolve(TRAILER));

      trailerService.get(URL_PARAM)
        .then(movie => {
          result = movie;
          done();
        });
    });

    it('should request the url', () => {
      expect(movieClient.get).to.have.been.calledWith(URL_PARAM);
    });

    it('should request the trailer using the movie imdb id', () => {
      expect(trailerClient.get).to.have.been.calledWith(MOVIE.getImdbId());
    });

    it('should respond with the response from the mapper', () => {
      expect(result).to.eql(TRAILER);
    });
  });
});
