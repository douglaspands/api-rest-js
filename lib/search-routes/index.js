/**
 * @file search-routes
 * @description Gera uma lista de rotas disponiveis.
 * @author douglaspands
 */
const config = require('../../config');
const logger = require('../logger');
const searchFiles = require('../search-files');

const listRouters = (searchFiles.getFiles(config.folder.APP)).reduce((routes, file) => {
  if (config.file.REGEX_JS_FILE.test(file)) {
    try {
      // eslint-disable-next-line global-require, import/no-dynamic-require
      const route = require(file);
      if (typeof route === 'function' && route.name === config.constants.ROUTER) {
        routes.push(route);
      }
    } catch (error) {
      logger.debug(error);
    }
  }
  return routes;
}, []);

module.exports = listRouters;
