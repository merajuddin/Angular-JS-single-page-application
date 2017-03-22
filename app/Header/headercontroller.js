angular.module('headermodule').controller('headercontroller', function($scope, commonservice, $http, $location){
	

    $scope.currentIndex ={
    	slide:0
    };
  
	var products = function(){
		commonservice.getdata().then(function(resp){
			$scope.productInfo = resp.allProducts;
			$scope.slides = $scope.productInfo;
			console.log($scope.productInfo)
		}, 
			function(error){});
	}

	products();

$('#GCcarousel').bind('slide.bs.carousel', function (e) {
	  var carouselData = $(this).data('bs.carousel');
  var currentIndex = carouselData.getItemIndex(carouselData.$element.find('.item.active'));
 	if(currentIndex != 6){
   $scope.$apply(function () {
            $scope.currentIndex.slide = currentIndex + 1;
        });}
  console.log($scope.currentIndex.slide);
});

$scope.BuyItem = function(){
  var currentItem = JSON.stringify($scope.slides[$scope.currentIndex.slide]);
  localStorage.setItem('currentGuitar',currentItem);	

}




});