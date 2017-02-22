const requestify = require('requestify');
const movieMapper = require('./movie.mapper');

function get(url) {
  return requestify.get(url)
    .then(response => response.getBody())
    .then(movieMapper.mapFromViaplay);
}

module.exports = {
  get
};
