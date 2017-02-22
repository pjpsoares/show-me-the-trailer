const config = require('config');
const youtubeBaseUrl = config.get('youtube.baseUrl');

class Trailer {
  constructor(id) {
    this.id = id;
  }

  getLink() {
    if (!this.id) {
      return;
    }

    return `${youtubeBaseUrl}${this.id}`;
  }
}

module.exports = Trailer;
