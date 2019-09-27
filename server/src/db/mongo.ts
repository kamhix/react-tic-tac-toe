import mongoose from 'mongoose';
import IConfig from '../interface/config';

export default {
  connect: (config: IConfig)  => {
    mongoose.connect(process.env.NODE_ENV == "test" ? config.dbtest : config.db, { 
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