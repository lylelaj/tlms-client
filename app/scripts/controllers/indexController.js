
//应用模块,'index.directive','index.filter'
angular.module('index',['index.service'])

.controller('indexController', ['$scope','building', function($scope,building){
	console.log("111111111111");
	$scope.test=building.test;
}])