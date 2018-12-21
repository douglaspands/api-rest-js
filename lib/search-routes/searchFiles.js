/**
 * @file Procurar arquivos passado um diretorio.
 * @author @douglaspands
 * @since 2017-12-28
 */
const fs = require('fs');
const path = require('path');
/**
 * Listar todos os arquivos de um diretorio.
 * @param {string} folder diretorio com o caminho completo
 * @return {array} lista de arquivos.
 */
const searchFiles = (folder) => {
  const listFiles = [];
  /**
   * Concatena a lista de diretorios com o diretorio pesquisado.
   * @param {array} listDir lista de diretorios retornado da função fs.readDirSync()
   * @param {string} main diretorio submetido a função fs.readDirSync()
   * @return {array} Lista de diretorios
   */
  const fullPath = (listDir, main) => listDir.map(d => path.join(main, d));
  /**
   * Faz a inclusao dos arquivos encontrados.
   * @param {array} list Lista de diretorios
   */
  const findFiles = (list) => {
    list.forEach((f) => {
      if (fs.lstatSync(f).isDirectory()) {
        findFiles(fullPath(fs.readdirSync(f), f));
      } else {
        listFiles.push(f);
      }
    });
  };
  //--
  findFiles(fullPath(fs.readdirSync(folder), folder));
  //--
  return listFiles.sort((a, b) => {
    let result = null;
    if (a === b) result = 0;
    else if (a < b) result = -1;
    else result = +1;
    return result;
  });
}

module.exports = searchFiles;
