
//应用模块,'index.directive','index.filter'
angular.module('index',['index.service'],function(){
	console.log('333333');
})
//
.controller('indexController', ['$scope','buildingTree', function($scope,buildingTree){
	console.log("111111111111");
	$scope.building=buildingTree;
	$scope.rooms=[];

	//选择楼房
	$scope.selectedStorey=function(room,$event){
		$event.stopPropagation();
		$scope.rooms=[];
		$scope.rooms.push(room.rooms);
		console.log($scope.rooms);
	}
	//选中房屋
	$scope.selectedBuil=function(buil,$event){
		$event.stopPropagation();
		$scope.rooms=[];
		for(storey in buil.storeys){
			console.log(storey);
			$scope.rooms.push(buil.storeys[storey].rooms);
		}
		
	}
	//选中ROOT
	$scope.selectedBuilds=function(buils,$event){
		$event.stopPropagation();
		$scope.rooms=[];
		for(storeys in buils){
			// console.log(storeys);
			console.log(buils[storeys].name);
			for(storey in buils[storeys].storeys){
				console.log(buils[storeys][storey]);
				$scope.rooms.push(buils[storeys].storeys[storey].rooms);
			}
		}
		console.log($scope.rooms);
	}
}])
