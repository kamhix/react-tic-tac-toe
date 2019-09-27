import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import compression from 'compression';
import logger from 'morgan';
import cors from 'cors';
import requestIp from 'request-ip';

import config from './config';
import api from './api';
import mongoManager from './db/mongo';

var app: express.Application = express();

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
