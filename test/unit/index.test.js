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
      const mod = require.resolve('../../../../lib/server-express');
      removeModule(mod);
      done();
    })

    it('1 - Configurando o servidor express - Sem rotas', done => {

      mock('../../../../lib/search-routes', []);

      const server = require('../../../../lib/server-express');
      expect(server).to.be.an('function');  
      expect(server.name).to.equal('app');      
    
      done();

    });

    it('2 - Configurando o servidor express - 2 rotas', done => {

      mock('../../../../lib/search-routes', [
        function (req, res, next) {},
        function (req, res, next) {}
      ]);

      const server = require('../../../../lib/server-express');
      expect(server).to.be.an('function');  
      expect(server.name).to.equal('app');      
    
      done();

    });

  });

});

function removeModule(name) {
  delete require.cache[name];
}
