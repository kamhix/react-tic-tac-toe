const express = require('express');
const { errorHandler } = require('../middleware');
const { Game } = require('../models/game');

const games = require('../controllers/game');
const models = { Game };

const routersInit = config => {
  const router = express();
  
  router.get('/', (req, res, next) => {
    res.send('Welcome to Tic Tac Toe API !');
  });

  router.use('/games', games(models, {config}));

  router.use(errorHandler);
  return router;
}

module.exports = routersInit;