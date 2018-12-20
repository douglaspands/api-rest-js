/**
 * @description Cobertura de testes do route da api de api-funcionarios-get
 * @author douglaspands
 * @since 2018-12-19
 */
const expect = require('chai').expect;
const mock = require('mock-require');
require('../../../../app/handlers/auth');
const fileModule = require.resolve('../../../../app/handlers/auth');

describe('app/handlers/auth.js', () => {

  describe('#export default ()', () => {

    beforeEach(done => {
      mock.stopAll();
      removeModule(fileModule);
      done();
    })

    afterEach(done => {
      mock.stopAll();
      removeModule(fileModule);
      done();
    })

    it('1 - Negação do usuario - Token Invalido', done => {

      mock('../../../../lib/logger', { debug: () => {} });

      const req = {
        headers: {
          token: ''
        }
      }

      const res = () => {
        let statusCode = 0;
        return {
          status: status => {
            statusCode = status;
            return {
              send: mensagem => {
                expect(statusCode).to.equal(401);
                expect(mensagem).to.equal('Usuario não autorizado');
                done();
              }
            }
          }
        }
      }

      const next = () => {
        done('Deveria ter retornado statusCode 401');
      }

      const auth = require(fileModule);
      auth(req, res(), next);

    });

    it('2 - Token valido', done => {

      mock('../../../../lib/logger', { debug: () => {} });

      const req = {
        headers: {
          token: 'teste'
        }
      }

      const res = () => {
        let statusCode = 0;
        return {
          status: status => {
            statusCode = status;
            return {
              send: mensagem => {
                done('Erro, deveria ter passado no next()');
              }
            }
          }
        }
      }

      const next = () => {
        done();
      }

      const auth = require(fileModule);
      auth(req, res(), next);

    });

  });

});

function removeModule(name) {
  delete require.cache[name];
}
