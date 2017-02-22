const express = require('express');
const app = express();

app.use(require('./trailer/trailer.controller'));

app.listen(3000);
