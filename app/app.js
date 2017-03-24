var app = angular.module('GCapp' , [
	'ui.router',
	'headermodule',
	'commonmodule'
	]);

app.config(function($stateProvider){
	$stateProvider
	.state('home',{
		url:'/',
		templateUrl:'Header/mainpage.html'
	})
	.state('products', {
		url:'/products',
		templateUrl:'Header/mainpage.html'
		
	}).state('form',{
		url:'/purchase',
		templateUrl:'Purchaseform/form.html'
		
	}).state('confirmation',{
		url:'/confirmation',
		templateUrl:'confirmation/confirm.html'
	});
	
});