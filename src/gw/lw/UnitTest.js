/**
 *
 */
var UnitTest = {
	GetMsgP : function(msg) {
		if (msg.payload.msgP) {
			msg.payload = msg.payload.msgP;
		}
		return msg;
	},
	DoSomething4Devtype : function(msg){
		if (msg.payload.devType && msg.payload.devType == 1) {
			msg.payload.info = "This Type Of Machine is 1";
		}
		return msg;
	}
}

module.exports = UnitTest;