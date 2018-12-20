/**
 * @description Cobertura de testes do route da api de api-usuarios-get
 * @author douglaspands
 * @since 2018-12-19
 */
const expect = require('chai').expect;
const mock = require('mock-require');
const fileModule = '../../../../app/api-usuarios-get/service.js';

describe('app/api-usuarios-get/service.js', () => {

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

    it('1 - Execução com sucesso', done => {

      const service = require(fileModule);
      const resultado = service();
      expect(resultado).to.have.lengthOf(4);
      expect(resultado[0]).to.equal('Victor');
      expect(resultado[1]).to.equal('Pedro');
      expect(resultado[2]).to.equal('Fernanda');
      expect(resultado[3]).to.equal('Paula');
      done();

    });  

  });
 
});

function removeModule(name) {
  delete require.cache[name];
}
