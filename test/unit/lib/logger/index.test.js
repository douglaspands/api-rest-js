/**
 * @description Cobertura de testes do logger.js
 * @author douglaspands
 * @since 2018-12-19
 */
const logger = require('../../../../lib/logger');

describe('logger', () => {

  describe('#export default ()', () => {

    beforeEach(done => {
      process.env.LOG_LEVEL = 'silly';
      done();
    })

    afterEach(done => {
      process.env.LOG_LEVEL = '';
      done();
    })

    it('1 - Logger - Gerar log no level \"silly\"', done => {

      try {
        logger.silly('teste - silly');
        done();
      } catch (error) {
        done(error);
      }

    });

    it('2 - Logger - Gerar log no level \"debug\"', done => {

      try {
        logger.debug('teste - debug');
        done();
      } catch (error) {
        done(error);
      }

    });

    it('3 - Logger - Gerar log no level \"verbose\"', done => {

      try {
        logger.verbose('teste - verbose');
        done();
      } catch (error) {
        done(error);
      }

    });

    it('4 - Logger - Gerar log no level \"info\"', done => {

      try {
        logger.info('teste - info');
        done();
      } catch (error) {
        done(error);
      }

    });

    it('5 - Logger - Gerar log no level \"warn\"', done => {

      try {
        logger.warn('teste - warn');
        done();
      } catch (error) {
        done(error);
      }

    });

    it('6 - Logger - Gerar log no level \"error\"', done => {

      try {
        logger.error('teste - error');
        done();
      } catch (error) {
        done(error);
      }

    });

  });

});
