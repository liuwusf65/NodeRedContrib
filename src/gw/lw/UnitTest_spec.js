/**
 *
 */
var should = require("should");
var UnitTest = require('../lw/UnitTest');



describe("UnitTest--GetMsgP", function() {

	it("GetMsgP--Should Have MsgP", function(done) {
		var msg = {payload:{
			"date" : "2014/11/05 12:13:01",
			"msgP" : {
				"Type" : "Ctrl",
				"DeviceID" : "12xxxxxx"
			},
			"muid" : "ffffffff-ffff-ffff-eeee-fffffffffffa",
			"msgN" : "STATUS=323&USERID=xxxx&PASSWORD=xxx",
			"devType" : 1
		}};
		UnitTest.GetMsgP(msg).payload.should.have.property("Type","Ctrl");
		done();
	});

	it("GetMsgP--Should No MsgP", function(done) {
		var msg = {payload:{
			"date" : "2014/11/05 12:13:01",
			"muid" : "ffffffff-ffff-ffff-eeee-fffffffffffa",
			"msgN" : "STATUS=323&USERID=xxxx&PASSWORD=xxx",
			"devType" : 1
		}};
		should.not.exist(UnitTest.GetMsgP(msg).payload.msgp);
		done();
	});

});

describe("UnitTest--DoSomething4Devtype", function() {

	it("DoSomething4Devtype--Should Add Info", function(done) {
		var msg = {payload:{
			"date" : "2014/11/05 12:13:01",
			"muid" : "ffffffff-ffff-ffff-eeee-fffffffffffa",
			"msgN" : "STATUS=323&USERID=xxxx&PASSWORD=xxx",
			"devType" : 1
		}};
		UnitTest.DoSomething4Devtype(msg).payload.should.have.property("info","This Type Of Machine is "+msg.payload.devType);
		done();
	});

	it("DoSomething4Devtype--Should No Info", function(done) {
		var msg = {payload:{
			"date" : "2014/11/05 12:13:01",
			"muid" : "ffffffff-ffff-ffff-eeee-fffffffffffa",
			"msgN" : "STATUS=323&USERID=xxxx&PASSWORD=xxx",
			"devType" : 2
		}};
		should.not.exist(UnitTest.DoSomething4Devtype(msg).payload.info);
		done();
	});

});