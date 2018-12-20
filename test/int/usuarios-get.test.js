/**
 * @description Teste integrado com a api de consultar usuarios.
 * @author douglaspands
 * @since 2018-12-20
 */
const expect = require('chai').expect;
const request = require('supertest');

describe('/v1/usuarios [get]', () => {

  it('1 - Consultar lista de usuarios - StatusCode 401', done => {

    const app = require('../../lib/server-express');

    request(app)
      .get('/v1/usuarios')
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

  it('2 - Consultar lista de usuarios - StatusCode 200', done => {

    const app = require('../../lib/server-express');

    request(app)
      .get('/v1/usuarios')
      .set('token', 'teste')
      .expect(200)
      .end(function(err, res) {
        if (err) {
          done(err);
        } else {
          expect(res.body.data).to.have.lengthOf(4);
          expect(res.body.data[0]).to.equal('Victor');
          expect(res.body.data[1]).to.equal('Pedro');
          expect(res.body.data[2]).to.equal('Fernanda');
          expect(res.body.data[3]).to.equal('Paula');
          done();
        }
      });

  });

});
