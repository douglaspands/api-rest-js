/**
 * @file logger
 * @description 
 * @author douglaspands
 */
'use strict';
const winston = require('winston');
const { logger } = require('../../config');

const logger = winston.createLogger({
    level: logger.LEVEL,
    format: winston.format.json(),
    transports: []
});
if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.simple()
    }));
}

module.exports = logger;