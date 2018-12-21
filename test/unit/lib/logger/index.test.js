/**
 * @description Cobertura de testes do logger.js
 * @author douglaspands
 * @since 2018-12-19
 */
const mod = '../../../../lib/logger';
const config1 = '../../../../config';
const config2 = '../../../../config/logger'

describe('lib/logger', () => {

  describe('#export default ()', () => {

    beforeEach(done => {
      removeModule(require.resolve(config1));
      removeModule(require.resolve(config2));
      removeModule(require.resolve(mod));
      process.env.LOG_LEVEL = 'silly';
      done();
    })

    afterEach(done => {
      removeModule(require.resolve(config1));
      removeModule(require.resolve(config2));
      removeModule(require.resolve(mod));
      process.env.LOG_LEVEL = '';
      done();
    })

    it('1 - Logger - Gerar log no level \"silly\"', done => {

      const logger = require(mod);

      try {
        logger.silly('teste - silly');
        done();
      } catch (error) {
        done(error);
      }

    });

    it('2 - Logger - Gerar log no level \"debug\"', done => {

      const logger = require(mod);

      try {
        logger.debug('teste - debug');
        done();
      } catch (error) {
        done(error);
      }

    });

    it('3 - Logger - Gerar log no level \"verbose\"', done => {

      const logger = require(mod);

      try {
        logger.verbose('teste - verbose');
        done();
      } catch (error) {
        done(error);
      }

    });

    it('4 - Logger - Gerar log no level \"info\"', done => {

      const logger = require(mod);

      try {
        logger.info('teste - info');
        done();
      } catch (error) {
        done(error);
      }

    });

    it('5 - Logger - Gerar log no level \"warn\"', done => {

      const logger = require(mod);

      try {
        logger.warn('teste - warn');
        done();
      } catch (error) {
        done(error);
      }

    });

    it('6 - Logger - Gerar log no level \"error\"', done => {

      const logger = require(mod);

      try {
        logger.error('teste - error');
        done();
      } catch (error) {
        done(error);
      }

    });

    it('7 - Logger - Gerar log no level \"info\" - Configuração Default (Sem variavel de ambiente)', done => {

      process.env.LOG_LEVEL = '';
      const logger = require(mod);

      try {
        logger.info('teste - info');
        done();
      } catch (error) {
        done(error);
      }

    });

  });

});

function removeModule(name) {
  delete require.cache[name];
}
