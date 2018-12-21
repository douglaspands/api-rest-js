/**
 * @file search-routes
 * @description Gera uma lista de rotas disponiveis.
 * @author douglaspands
 */
const searchFiles = require('./searchFiles');
const config = require('../../config');
const logger = require('../logger');

const listRouters = (searchFiles(config.folder.APP)).reduce((routes, file) => {
  try {
    // eslint-disable-next-line global-require, import/no-dynamic-require
    const route = require(file);
    if (typeof route === 'function' && route.name === config.constants.ROUTER) {
      routes.push(route);
    }
  } catch (error) {
    logger.warn(error);
  }
  return routes;
}, []);

module.exports = listRouters;
