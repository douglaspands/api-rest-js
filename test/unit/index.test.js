/**
 * @description Cobertura de testes do Inicializador do servidor
 * @author douglaspands
 * @since 2018-12-19
 */
const expect = require('chai').expect;
const mock = require('mock-require');

describe('index.js', () => {

  describe('#server', () => {

    afterEach(done => {
      mock.stopAll();
      const mod = require.resolve('../../index');
      removeModule(mod);
      done();
    })

    it('1 - Configurando o servidor express - Sem rotas', done => {

      mock('../../config', {
        server: {
          PORT: 3000
        }
      });
      mock('../../lib/logger', {
        info: () => {}
      });
      mock('../../lib/server-express', function(req, res, next) {});

      const server = require('../../index');
      setTimeout(() => {
        expect(server).to.be.an('object');
        server.close();
        done();
      }, 3000);

    });

  });

});

function removeModule(name) {
  delete require.cache[name];
}
