/**
 * @file search-routes
 * @author douglaspands
 */
'use strict';
const fs = require('fs');
const path = require('path');
const { folder } = require('../../config');

const listRouters = (fs.readdirSync(folder.APP)).reduce((routes, dir) => {
    const routeFile = path.join(dir, 'route.js');
    if (fs.lstatSync(routeFile).isFile()) {
        try {
            routes.push(require(routeFile));
        } catch (error) {
            console.error(error);
        }
    }
    return routes;
}, []);

module.exports = listRouters;