/**
 * @description Teste integrado com a api de consultar funcionarios.
 * @author douglaspands
 * @since 2018-12-20
 */
const expect = require('chai').expect;
const request = require('supertest');

describe('/v1/funcionarios [get]', () => {

  it('1 - Consultar lista de funcionarios - StatusCode 401', done => {

    const app = require('../../lib/server-express');

    request(app)
      .get('/v1/funcionarios')
      .set('token', '')
      .expect(401)
      .end(function(err, res) {
        if (err) {
          done(err);
        } else {
          expect(res.body).to.be.empty;;
          done();
        }
      });

  });

  it('2 - Consultar lista de funcionarios - StatusCode 200', done => {

    const app = require('../../lib/server-express');

    request(app)
      .get('/v1/funcionarios')
      .set('token', 'teste')
      .expect(200)
      .end(function(err, res) {
        if (err) {
          done(err);
        } else {
          expect(res.body.data).to.have.lengthOf(4);
          expect(res.body.data[0]).to.equal('Maria');
          expect(res.body.data[1]).to.equal('Joao');
          expect(res.body.data[2]).to.equal('Jose');
          expect(res.body.data[3]).to.equal('Paulo');
          done();
        }
      });

  });

});
