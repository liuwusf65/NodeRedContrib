/**
 *
 */
var log4js = require('log4js');
log4js.configure("./gw/config/log4js.json",[])

module.exports = function(RED) {
    function logger(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        this.category = config.category;


        var flowContext = this.context().flow;
        const logger = log4js.getLogger(this.category);
        flowContext.set('logger',logger);

        this.on('input', function(msg) {
        	//logger.warn(msg.loggermsg);
        	//node.status({});
            //node.send(msg);
            //RED.comms.publish("debug", msg);
        });
    }
    RED.nodes.registerType("log4js",logger);
}