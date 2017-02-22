const sinonChai = require('sinon-chai');
const chai = require('chai');
const expect = chai.expect;
const movieMapper = require('../../../src/shared/movie/movie.mapper');
const movieClient = require('../../../src/shared/movie/movie.client');
const requestify = require('requestify');
const sinon = require('sinon');
const Promise = require('bluebird');

chai.use(sinonChai);

describe('movie client', () => {
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('get', () => {
    const URL_PARAM = 'http://some.url';
    const URL_RESPONSE = {
      a: 'a'
    };
    const URL_BODY_RESPONSE = {
      getBody: () => URL_RESPONSE
    };
    const MAPPED_RESPONSE = {
      b: 'b'
    };
    let result;

    beforeEach((done) => {
      sandbox.stub(requestify, 'get').returns(Promise.resolve(URL_BODY_RESPONSE));
      sandbox.stub(movieMapper, 'mapFromViaplay').returns(Promise.resolve(MAPPED_RESPONSE));

      movieClient.get(URL_PARAM)
        .then(movie => {
          result = movie;
          done();
        });
    });

    it('should request the url', () => {
      expect(requestify.get).to.have.been.calledWith(URL_PARAM);
    });

    it('should send the json from request to the mapper', () => {
      expect(movieMapper.mapFromViaplay).to.have.been.calledWith(URL_RESPONSE);
    });

    it('should respond with the response from the mapper', () => {
      expect(result).to.eql(MAPPED_RESPONSE);
    });
  });
});
