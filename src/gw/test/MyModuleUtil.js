/**
 *
 */
var myModuleUtil = {
	camelCase:function(string){
		// 定义正则表达式匹配"_[小写字母/数字]"
		var rdashAlpha = /[_\-]([a-z]|[0-9])/ig;
		// replace方法的替换回调函数
		var fcamelCase = function(all, letter){
			// letter + ""是防止letter为undefined时，函数抛出异常
			return ( letter + "").toUpperCase();
		};
		return string.replace(rdashAlpha, fcamelCase);
	},
	toUpperCase:function(string){
		// return (string).toUpperCase();
		return (string + "").toUpperCase();
	}
}

module.exports = myModuleUtil;