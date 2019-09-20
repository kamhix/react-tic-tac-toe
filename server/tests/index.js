process.env.IS_TESTING = true;
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

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
      chai.request(app)
        .post('/api/v1/games')
        .type('form')
        .send({
          'moves': [{squares: []}],
          'status': 'win',
          'message': 'A mere test'
        })
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