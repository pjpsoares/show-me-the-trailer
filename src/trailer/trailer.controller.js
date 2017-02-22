const express = require('express');
const router = express.Router();
const trailerService = require('./trailer.service');

router.get('/trailer', function (req, res) {
  trailerService.get(req.query.url)
    .then(trailer => res.send(trailer.getLink()))
    .catch(() => res.send('An error occurred'));
});

module.exports = router;
