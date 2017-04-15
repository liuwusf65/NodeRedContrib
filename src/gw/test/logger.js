/**
 *
 */
var log4js = require('log4js');
log4js.configure("./config/log4js.json",[])

const logger = log4js.getLogger('demo');

logger.trace("Some debug messages");
logger.info("Some debug messages");
logger.debug("Some debug messages");
logger.warn("Some debug messages");
logger.error("Some debug messages");
logger.fatal("Some debug messages");