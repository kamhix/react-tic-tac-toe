const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  moves: [{
    squares: [{ type: String }]
  }],
  ipAddress: {
    type: String,
    required: [true],
  },
  status: {
    type: String,
    enum: ['draw', 'win'],
    required: [true],
  },
  message: {
    type: String,
    required: [true],
  }
}, {
  timestamps: true,
});

module.exports = { schema };