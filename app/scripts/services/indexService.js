
var indexServer = angular.module('index.service',[]);


indexServer.service('buildingTree', function(){
	return {
		rootUser:'ROOT',
		build:[{
				name:'商住楼',
				storeys:[{
					storeyId:'一楼',
					rooms:['101','102','103','104','105','106','107','108','109']
				},{
					storeyId:'二楼',
					rooms:['201','202','203','204','205','206','207','208','209']
				}]
			},{
				name:'商住楼',
				storeys:[{
					storeyId:'一楼',
					rooms:['101','102']
				}]
			}]
	};
})


