/**
 * @description Cobertura de testes do route da api de api-funcionarios-get
 * @author douglaspands
 * @since 2018-12-19
 */
const expect = require('chai').expect;
const mock = require('mock-require');
const fileModule = '../../../../app/api-funcionarios-get';

describe('api-funcionarios-get/index.js', () => {

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

    it('1 - Cadastramento de api com sucesso', done => {

      mock('../../../../app/handlers/auth', function(req, res, next) { });
      mock('../../../../app/api-funcionarios-get/controller');

      const api = require(fileModule);

      expect(api.name).to.equal('router');
      done();

    });

  });

});

function removeModule(name) {
  delete require.cache[name];
}
