export default {
  db: process.env.MONGODB_URI || 'mongodb://localhost/tictactoe',
  dbtest: process.env.MONGODB_URITEST || 'mongodb://localhost/tictactoetest'
}