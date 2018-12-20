/**
 * @description Cobertura de testes do route da api de api-usuarios-get
 * @author douglaspands
 * @since 2018-12-19
 */
const expect = require('chai').expect;
const mock = require('mock-require');
const fileModule = '../../../../app/api-usuarios-get/controller.js';

describe('app/api-usuarios-get/controller.js', () => {

  describe('#export default ()', () => {

    beforeEach(done => {
      mock.stopAll();
      removeModule(require.resolve(fileModule));
      done();
    })

    afterEach(done => {
      mock.stopAll();
      removeModule(require.resolve(fileModule));
      done();
    })

    it('1 - Execução com sucesso - statusCode 200', done => {

      mock('../../../../lib/logger', { info: () => {} });
      mock('../../../../app/api-usuarios-get/service', () => ['Joao', 'Maria']);

      const res = () => {
        let statusCode = 0;
        return {
          status: status => {
            statusCode = status;
            return {
              send: mensagem => {
                expect(statusCode).to.equal(200);
                expect(mensagem.data).to.have.lengthOf(2);
                expect(mensagem.data[0]).to.equal('Joao');
                expect(mensagem.data[1]).to.equal('Maria');
                done();
              }
            }
          }
        }
      }

      const controller = require(fileModule);
      controller(null, res());

    });

    it('2 - Execução com sucesso - statusCode 204', done => {

      mock('../../../../lib/logger', { info: () => {} });
      mock('../../../../app/api-usuarios-get/service', () => []);

      const res = () => {
        let statusCode = 0;
        return {
          status: status => {
            statusCode = status;
            return {
              send: mensagem => {
                expect(statusCode).to.equal(204);
                expect(mensagem).to.be.undefined;
                done();
              }
            }
          }
        }
      }

      const controller = require(fileModule);
      controller(null, res());

    });

    it('3 - Execução com erro - statusCode 500', done => {

        mock('../../../../lib/logger', { info: () => {} });
        mock('../../../../app/api-usuarios-get/service', () => {
            throw 'Simulação de erro';
        });
  
        const res = () => {
          let statusCode = 0;
          return {
            status: status => {
              statusCode = status;
              return {
                send: mensagem => {
                  expect(statusCode).to.equal(500);
                  expect(mensagem).to.equal('Simulação de erro');
                  done();
                }
              }
            }
          }
        }
  
        const controller = require(fileModule);
        controller(null, res());
  
      });
  

  });
 
});

function removeModule(name) {
  delete require.cache[name];
}
