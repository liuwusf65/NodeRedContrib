/**
 *
 */
var should = require("should");
var MyModuleUtil = require('../lw/MyModuleUtil');


describe("MyModuleUtil--camelCase", function() {

	it("camelCase：getuser camelCase getuser ", function(done) {
		var testStr = "getuser";
		MyModuleUtil.camelCase(testStr).should.eql("getuser");
		done();
	});

	it("camelCase：get_user camelCase getUser ", function(done) {
		var testStr = "get_user";
		MyModuleUtil.camelCase(testStr).should.eql("getUser");
		done();
	});

	it("camelCase：get_user_info camelCase getUserInfo", function(done) {
		var testStr = "get_user_info";
		MyModuleUtil.camelCase(testStr).should.eql("getUserInfo");
		done();
	});

	it("camelCase：get-user camelCase getUser ", function(done) {
		var testStr = "get-user";
		MyModuleUtil.camelCase(testStr).should.eql("getUser");
		done();
	});

	it("camelCase：get-user-info camelCase getUserInfo", function(done) {
		var testStr = "get-user-info";
		MyModuleUtil.camelCase(testStr).should.eql("getUserInfo");
		done();
	});

	it("camelCase：get-user_info camelCase getUserInfo", function(done) {
		var testStr = "get-user_info";
		MyModuleUtil.camelCase(testStr).should.eql("getUserInfo");
		done();
	});

});