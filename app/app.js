var app = angular.module('GCapp' , [
	'ui.router',
	'headermodule',
	'commonmodule'
	]);

app.config(function($stateProvider){
	$stateProvider
	.state('/', {
		url:'/products',
		templateUrl:'Header/mainpage.html'
	})
	.state('form',{
		url:'/purchase',
		templateUrl:'Purchaseform/form.html'
		
	})
	.state('confirmation',{
		url:'/confirmation',
		templateUrl:'confirmation/confirm.html'
	});
	
});