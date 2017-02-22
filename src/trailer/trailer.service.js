const movieClient = require('../shared/movie/movie.client');
const trailerClient = require('./trailer.client');

function get(url) {
  return movieClient.get(url)
    .then(movie => trailerClient.get(movie.getImdbId()));
}

module.exports = {
  get
};
