const Movie = require('./movie.model');

function mapFromViaplay(response) {
  if (
    !response ||
    !response._embedded ||
    !response._embedded['viaplay:blocks'] ||
    !response._embedded['viaplay:blocks'][0] ||
    !response._embedded['viaplay:blocks'][0]._embedded ||
    !response._embedded['viaplay:blocks'][0]._embedded['viaplay:product'] ||
    !response._embedded['viaplay:blocks'][0]._embedded['viaplay:product'].content ||
    !response._embedded['viaplay:blocks'][0]._embedded['viaplay:product'].content.imdb ||
    !response._embedded['viaplay:blocks'][0]._embedded['viaplay:product'].content.imdb.id
  ) {
    throw new Error('Invalid object from the url');
  }

  return new Movie(
    response._embedded['viaplay:blocks'][0]._embedded['viaplay:product'].content.imdb.id
  );
}

module.exports = {
  mapFromViaplay
};
