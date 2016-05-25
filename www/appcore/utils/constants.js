angular.module('avanteApp')

.service('Constants', [function(){

	var _API ={
		//baseUrl:"http://127.0.0.1/loyaluserscript/api/",
		baseUrl:"http://www.avantesoft.com/loyaluserscript/api/",

		userIdToken : "AppToken",
        merchantDbToken : "DbToken",
        serialNoToken : "SerialNoToken"


	}

	var constants={
		API :_API
	};

	return constants;
	
}])