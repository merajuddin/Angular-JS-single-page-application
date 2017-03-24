angular.module('commonmodule').service('commonservice', function($http, $q){
	this.getdata = function(){
		var deffered = $q.defer();
		$http({
			method:'GET',
			url: '../guitardata.json'
		}).success(function(resp){
			deffered.resolve(resp);
		}).error(function(error){
			deffered.reject(error);
		});

		return deffered.promise;
	}

	

});