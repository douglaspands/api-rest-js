/**
 * @description Cobertura de testes do server-express
 * @author douglaspands
 * @since 2018-12-19
 */
const expect = require('chai').expect;
const path = require('path');
const mock = require('mock-require');

describe('server-express', () => {

  describe('#export default ()', () => {

    afterEach(done => {
      mock.stopAll();
      const mod = require.resolve('../../../../lib/server-express');
      removeModule(mod);
      done();
    })

    it('1 - Lista de rotas vazia - pasta de apis vazia', done => {

      mock('../../../../config', {
        folder: {
          APP: path.join(__dirname, '/')
        },
        logger: {
          LEVEL: 'info'
        }
      });

      const searchRoutes = require('../../../../lib/search-routes');
      expect(searchRoutes).to.be.empty;
      done();

    });

  });

});

function removeModule(name) {
  delete require.cache[name];
}
