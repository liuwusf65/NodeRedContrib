/**
 *
 */
var log4js = require('log4js');
log4js.configure("./gw/config/log4js.json",[])

module.exports = function(RED) {
    function logger(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        this.on('input', function(msg) {
        	const logger = log4js.getLogger(msg.loggername);
        	logger.warn(msg.loggermsg);
            node.send(msg);
        });
    }
    RED.nodes.registerType("log4js",logger);
}