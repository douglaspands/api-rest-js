/**
 * @description Cobertura de testes do search-routes.js
 * @author douglaspands
 * @since 2018-12-19
 */
const expect = require('chai').expect;
const path = require('path');
const mock = require('mock-require');

describe('lib/search-routes', () => {

  describe('#export default ()', () => {

    beforeEach(done => {
      const mod = require.resolve('../../../../lib/search-routes');
      removeModule(mod);
      done();
    })

    afterEach(done => {
      mock.stopAll();
      const mod = require.resolve('../../../../lib/search-routes');
      removeModule(mod);
      done();
    })

    it('1 - Foi identificado 1 rota', done => {

      mock('../../../../lib/logger', {
        warn: () => ({})
      });
      mock('../../../../config', {
        folder: {
          APP: 'root/home',
          FIRST_FILE: 'index.js'
        },
        constants: {
          ROUTER: 'router'
        },
        logger: {
          LEVEL: 'info'
        }
      });
      mock('fs', {
        readdirSync: () => {
          return ['api-one', 'api-two', 'api-three'];
        },
        existsSync: () => true,
        lstatSync: () => ({ isFile: () => true })
      });
      mock('root/home/api-one/index.js', function router() {});
      mock('root/home/api-three/index.js', {});

      const searchRoutes = require('../../../../lib/search-routes');
      expect(searchRoutes).to.have.lengthOf(1);
      expect(searchRoutes[0].name).to.equal('router');
      done();

    });

    it('2 - Foi identificado 2 rota', done => {

      mock('../../../../lib/logger', {
        warn: () => ({})
      });
      mock('../../../../config', {
        folder: {
          APP: 'root/home',
          FIRST_FILE: 'index.js'
        },
        constants: {
          ROUTER: 'router'
        },
        logger: {
          LEVEL: 'info'
        }
      });
      mock('fs', {
        readdirSync: () => {
          return ['api-one', 'api-two', 'api-three'];
        },
        existsSync: () => true,
        lstatSync: () => ({ isFile: () => true })
      });
      mock('root/home/api-one/index.js', function router() {});
      mock('root/home/api-two/index.js', function router() {});
      mock('root/home/api-three/index.js', {});

      const searchRoutes = require('../../../../lib/search-routes');
      expect(searchRoutes).to.have.lengthOf(2);
      expect(searchRoutes[0].name).to.equal('router');
      expect(searchRoutes[1].name).to.equal('router');
      done();

    });

    it('3 - Lista de rotas vazia - pasta de apis vazia', done => {

      mock('../../../../config', {
        folder: {
          APP: path.join(__dirname, '/')
        },
        logger: {
          LEVEL: 'info'
        }
      });
      mock('fs', {
        readdirSync: () => {
          return [];
        }
      });

      const searchRoutes = require('../../../../lib/search-routes');
      expect(searchRoutes).to.be.empty;
      done();

    });

    it('4 - Pasta da api invalida', done => {

      mock('../../../../lib/logger', {
        warn: () => ({})
      });
      mock('../../../../config', {
        folder: {
          APP: 'root/home',
          FIRST_FILE: 'index.js'
        },
        constants: {
          ROUTER: 'router'
        },
        logger: {
          LEVEL: 'info'
        }
      });
      mock('fs', {
        readdirSync: () => {
          return ['api-one'];
        },
        existsSync: () => false,
        lstatSync: () => ({ isFile: () => false })
      });

      const searchRoutes = require('../../../../lib/search-routes');
      expect(searchRoutes).to.have.lengthOf(0);
      done();

    });


  });

});

function removeModule(name) {
  delete require.cache[name];
}
