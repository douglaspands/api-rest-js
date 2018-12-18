/**
 * @file search-routes
 * @author douglaspands
 */
'use strict';
const fs = require('fs');
const path = require('path');
const { folder } = require('../../config');
const logger = require('../logger');

const listRouters = (fs.readdirSync(folder.APP)).reduce((routes, dir) => {
    const routeFile = path.join(folder.APP, dir, 'route.js');
    if (fs.existsSync(routeFile) && fs.lstatSync(routeFile).isFile()) {
        try {
            routes.push(require(routeFile));
        } catch (error) {
            logger.warn(error);
        }
    }
    return routes;
}, []);

module.exports = listRouters;
