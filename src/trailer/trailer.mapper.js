const Trailer = require('./trailer.model.js');

function mapFromTMDB(response) {
  if (
    !response ||
    !response.youtube ||
    !response.youtube[0] ||
    !response.youtube[0].source
  ) {
    return undefined;
  }

  return new Trailer(response.youtube[0].source);
}

module.exports = {
  mapFromTMDB
};
