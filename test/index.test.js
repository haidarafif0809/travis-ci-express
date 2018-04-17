const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app')
const expect = chai.expect

chai.use(chaiHttp)


describe('App', () => {
  it('should run without any problem', () => {
    chai.request(app)
      .get('/')
      .end( (err, res) => {
         expect(res).to.have.status(200)
      })
  })
})
