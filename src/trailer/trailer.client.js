const Promise = require('bluebird');
const trailerMapper = require('./trailer.mapper');
const config = require('config');
const movieDBApiKey = config.get('movieDB.apiKey');
const movieDB = Promise.promisifyAll(require('moviedb')(movieDBApiKey));

function get(imdbId) {
  return movieDB.movieTrailersAsync({ id: imdbId })
    .then(trailerMapper.mapFromTMDB);
}

module.exports = {
  get
};
