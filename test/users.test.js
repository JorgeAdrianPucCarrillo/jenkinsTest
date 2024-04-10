import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index.js';

chai.use(chaiHttp);
const expect = chai.expect;

//testing get users
describe('Users API', () => {
  describe('GET /v1/users', () => {
    it('Should Retunr Users', (done) => {
      chai.request(app)
        .get('/v1/users')
        .end((err, res) => {
          expect(res).to.have.status(200); 
          expect(res._body.data).to.be.an('array'); 
          done(); 
        });
    });
  });
});