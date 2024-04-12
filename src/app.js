const express = require('express');
const dotenv = require('dotenv');

const app = express();


app.set('port', process.env.PORT || 3007);

module.exports = app;