/**
 * @file search-routes
 * @description Gera uma lista de rotas disponiveis.
 * @author douglaspands
 */
const fs = require('fs');
const path = require('path');
const { folder, constants } = require('../../config');
const logger = require('../logger');

const listRouters = (fs.readdirSync(folder.APP)).reduce((routes, dir) => {
  const routerFile = path.join(folder.APP, dir, folder.FIRST_FILE);
  if (fs.existsSync(routerFile) && fs.lstatSync(routerFile).isFile()) {
    try {
      // eslint-disable-next-line global-require, import/no-dynamic-require
      const route = require(routerFile);
      if (route.name === constants.ROUTER) {
        routes.push(route);
      }
    } catch (error) {
      logger.warn(error);
    }
  }
  return routes;
}, []);

module.exports = listRouters;
