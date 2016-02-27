var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
	$scope.firstName= "John";
	$scope.lastName= "Doe";
});

app.directive('pslCategory', function() {
	return {
		restrict: 'E',
		// controller : function() {
			// $scope.yolo = 'hihihi';
		// },
		templateUrl : 'html/category.html'
	}
})