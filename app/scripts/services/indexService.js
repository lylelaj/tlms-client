
var indexServer = angular.module('index.service',[]);

indexServer.service('building',[function(){
	var building={
		test:'TEST',
		//楼房单元
		building:[{
			name:'商住楼',
			//楼层
			storey:[
				{
					//一楼
					roms:[
						{

						},{

						},{

						}
					]
				},{
					//二楼
					roms:[
						{
							roomid:201,
							rtype:'两房两厅',
							m:'70m',
							orientation:'东',
							status:'已出租',
							contract:'11',
							rental:'1700',
							deposit:'2200'


						},{

						},{

						}
					]
				},{
					//三楼

				},{
					//四楼
				}
			]
		},{
			name:'琪琪花园',
			building:[{
				
			}]
		}]
	}
	return building;
}]);



