const mongoose = require('mongoose');
const { schema } = require('./schema');

const Game = mongoose.model('Game', schema);
module.exports = { Game };