class Movie {
  constructor(imdbId) {
    this.imdbId = imdbId;
  }

  getImdbId() {
    return this.imdbId;
  }
}

module.exports = Movie;
