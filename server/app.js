var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var compression = require('compression');
var logger = require('morgan');
var cors = require('cors');
const requestIp = require('request-ip');
const config = require('./config');
const api = require('./src/api');
const { mongoManager } = require('./src/db');

var app = express();

app.use(cors());
app.use(requestIp.mw())

mongoManager.connect(config);

app.use(logger('dev'));
app.use(express.json());
app.use(compression());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/v1', api(config));

module.exports = app;
