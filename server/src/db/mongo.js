var mongoose = require('mongoose');

module.exports = {
  connect: config => {
    mongoose.connect(process.env.IS_TESTING ? config.dbtest : config.db, { 
      useNewUrlParser: true, 
      useUnifiedTopology: true 
    }, function (err) {
      if (err) {
        console.log('Mongoose error:', err);
      }
      console.log('Successfully connected to Mongodb database');
    });
  }
}