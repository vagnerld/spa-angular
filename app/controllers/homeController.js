app.controller('homeController', function($scope) {
    $scope.message = 'Olha a home aí!';

    $scope.loves = [];
    $scope.s2 = 0;

    $scope.lover = function(){
    	$scope.s2++;
		$scope.loves.push($scope.s2);
    }

});