module.exports = {
  db: process.env.MONGODB_URI || 'mongodb://mongo/tictactoe',
  dbtest: process.env.MONGODB_URI || 'mongodb://mongo/tictactoetest'
}