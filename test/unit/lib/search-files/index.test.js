/**
 * @description Cobertura de testes do search-files.js
 * @author douglaspands
 * @since 2018-12-19
 */
const expect = require('chai').expect;
const path = require('path');
const mock = require('mock-require');
const modulo = '../../../../lib/search-files';

describe('lib/search-files', () => {

  describe('#export default ()', () => {

    beforeEach(done => {
      const mod = require.resolve(modulo);
      removeModule(mod);
      done();
    })

    afterEach(done => {
      mock.stopAll();
      const mod = require.resolve(modulo);
      removeModule(mod);
      done();
    })

    it('1 - Foi identificado 1 arquivo', done => {

      let count = 0;
      mock('fs', {
        readdirSync: () => {
          const resultado = (!count) ? ['subpasta', 'index.js'] : [];
          count++;
          return resultado;
        },
        lstatSync: (f) => ({
          isDirectory: () => {
            const resultado = !(new RegExp('^.+\\.js$')).test(f);
            return resultado;
          }
        })
      });

      const searchFiles = require(modulo);
      const files = searchFiles.getFiles('pasta');
      expect(files).to.have.lengthOf(1);
      expect(files[0]).to.equal('pasta/index.js');
      done();

    });

    it('2 - Foi identificado 3 arquivo', done => {

      let count = 0;
      mock('fs', {
        readdirSync: () => {
          const resultado = (!count) ? ['subpasta', 'index.js', 'index.js', 'service.js', 'controller.js'] : [];
          count++;
          return resultado;
        },
        lstatSync: (f) => ({
          isDirectory: () => {
            const resultado = !(new RegExp('^.+\\.js$')).test(f);
            return resultado;
          }
        })
      });

      const searchFiles = require(modulo);
      const files = searchFiles.getFiles('pasta');
      expect(files).to.have.lengthOf(4);
      expect(files[0]).to.equal('pasta/controller.js');
      expect(files[1]).to.equal('pasta/index.js');
      expect(files[2]).to.equal('pasta/index.js');
      expect(files[3]).to.equal('pasta/service.js');

      done();

    });

    it('3 - Utilizando cache', done => {

        let count = 0;
        mock('fs', {
          readdirSync: () => {
            const resultado = (!count) ? ['subpasta', 'index.js'] : [];
            count++;
            return resultado;
          },
          lstatSync: (f) => ({
            isDirectory: () => {
              const resultado = !(new RegExp('^.+\\.js$')).test(f);
              return resultado;
            }
          })
        });
  
        const searchFiles = require(modulo);
        const files1 = searchFiles.getFiles('pasta');
        expect(files1).to.have.lengthOf(1);
        expect(files1[0]).to.equal('pasta/index.js');

        const files2 = searchFiles.getFiles('pasta');
        expect(files2).to.have.lengthOf(1);
        expect(files2[0]).to.equal('pasta/index.js');

        done();
  
      });  

  });

});

function removeModule(name) {
  delete require.cache[name];
}
