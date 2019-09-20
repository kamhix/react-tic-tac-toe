const express = require('express');
const { list } = require('./list');
const { post } = require('./post');

module.exports = (models, { config }) => {
  const api = express();

  api.get('/', list(models, { config }));
  api.post('/', post(models, { config }));

  return api;
}