process.env.IS_TESTING = "true";
import chai from 'chai';
import chaiHttp from 'chai-http';
import IGame from '../../src/interface/game';

var app = require('../../src/app');

chai.use(chaiHttp);
chai.should();

describe("Games", () => {
  describe("GET /", () => {
    it("should get all games record", (done) => {
      chai.request(app)
        .get('/api/v1/games')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });
    
    it("should post one game record", (done) => {
      const dummyGame:IGame = {
        moves: [{ squares: Array(9).fill(null) }],
        status: 'win',
        message: 'A mere test'
      };

      chai.request(app)
        .post('/api/v1/games')
        .type('form')
        .send(dummyGame)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });
    
    it("should not post one game record with bad args", (done) => {
      chai.request(app)
        .post('/api/v1/games')
        .type('form')
        .send({
          'moves': 'yes',
          'message': 'A mere test'
        })
        .end((err, res) => {
          res.should.have.status(405);
          done();
        });
    });
  });
});