/**
 * @description Cobertura de testes do search-routes.js
 * @author douglaspands
 * @since 2018-12-19
 */
const expect = require('chai').expect;
const path = require('path');
const mock = require('mock-require');

describe('search-routes', () => {

  describe('#export default ()', () => {

    afterEach(done => {
      mock.stopAll();
      delete require.cache['/home/douglaspands/workspace/vscode/api-rest-js/lib/search-routes/index.js'];
      done();
    })

    it('1 - Lista de rotas vazia - pasta de apis vazia', done => {

        mock('../../../../config', {
            folder: {
                APP: path.join(__dirname, '/')
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

    it('2 - Lista de rotas vazia - pasta de apis vazia', done => {

        mock('../../../../config', {
            folder: {
                APP: path.join(__dirname, '/')
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

  });

});
