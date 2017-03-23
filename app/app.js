var app = angular.module('GCapp' , [
	'ui.router',
	'headermodule',
	'commonmodule'
	]);

app.config(function($stateProvider){
	$stateProvider
	.state('products', {
		url:'/products',
		templateUrl:'Header/mainpage.html'
		
	}).state('form',{
		url:'/purchase',
		templateUrl:'Purchaseform/form.html',
	});
	
});