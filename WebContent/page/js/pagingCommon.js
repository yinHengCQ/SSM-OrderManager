//url:连接后台的地址
var pagingInit = function(appName,controllerName,urlWithoutPrefix,ObjectName){   
	
	/*无需传入地址通用前缀*/
	urlAdress = "http://localhost:8080/OrderManager"+urlWithoutPrefix;
	
	var app = angular.module(appName, ['ui.bootstrap']);
	
	/*创建json格式到string的转换服务*/
    var jsonToStr = function(jsonData){
        var string = '';
        
        for(str in jsonData){
            string = string + str +'=' + jsonData[str] +'&';
        }
        
        var _last = string.lastIndexOf('&');
        
        string = string.substring(0,_last);
        
        return string;
    };
	    	
    app.controller(controllerName,function($scope,$log,$http,$modal,$window){
    	/*当前页码*/
    	var page = 1;
    	/*下一页页码*/
    	var next = "";
    	/*上一页页码*/
    	var prev = "";
    	/*总页码数*/
    	var totalPages = "";
    	
    	/*分页条中间的页码*/
    	var midle = 0;
    	/*中间页码之前的页码个数*/
    	var before = 0;
    	/*中间页码之后的页码个数*/
    	var after = 0;
    	
    	/*定义一个只有属性的对象*/
    	var objForJudgement ="";
    	
    	/*每页显示多少条数据，有1,2,3,5,10,20几个选项*/
    	$scope.pageSize = [1,2,3,5,10,20];
    	
    	/*加载完页面立刻读取数据，并为objForJudgement赋值*/
    	$http.get(urlAdress+"show"+ObjectName+".do").success(function(data){    		
    		$scope.data = data.data;
    		page = data.page;
    		next = data.next;
    		prev = data.prev;
    		totalPages = data.totalPages;
    		getPageList();
    		$scope.isActivePage = isActivePage;
    		
    		this.objForJudgement = "";
    		this.objForJudgement += "{";
    		for ( var key in data.data[0]) {
    			this.objForJudgement += (key+":'',");
			}
            var __last = this.objForJudgement.lastIndexOf(',');            
            this.objForJudgement = this.objForJudgement.substring(0,__last);
    		this.objForJudgement += "}";
    	});
    	
    	
    	
    	/*改变每页显示多少条数据后重新读取数据*/
    	$scope.changeSize = function(){
        	$http.get(urlAdress+"show"+ObjectName+".do?size="+$scope.selectPageSize).success(function(data){
        		$scope.data = data.data;
        		page = data.page;
        		next = data.next;
        		prev = data.prev;
        		totalPages = data.totalPages;
        		getPageList();
        		$scope.isActivePage = isActivePage;
        	});    		
    	}
    	
    	/*改变当前页码后重新读取数据*/
    	$scope.selectPage = function(p){
    		$http.get(urlAdress+"show"+ObjectName+".do?page="+p+"&size="+$scope.selectPageSize).success(function(data){
				$scope.data = data.data;
				page = data.page;
	    		next = data.next;
	    		prev = data.prev;
    		})
    	}
    	
    	/*选择下一页后重新读取数据*/
		$scope.Next = function(){
			if (page==totalPages) {
				return false;
			}
			$http.get(urlAdress+"show"+ObjectName+".do?page="+next+"&size="+$scope.selectPageSize).success(function(data){
				$scope.data = data.data;
				page = data.page;
	    		next = data.next;
	    		prev = data.prev;	    		
			})
		}
		
		/*选择上一页后重新读取数据*/
		$scope.Previous = function(){
			if (page==1) {
				return false;
			}
			$http.get(urlAdress+"show"+ObjectName+".do?page="+prev+"&size="+$scope.selectPageSize).success(function(data){
				$scope.data = data.data;
				page = data.page;
	    		next = data.next;
	    		prev = data.prev;
			})			
		}
		
		//获取分页条
		var getPageList = function(){
			// 默认要显示10个页码， 如果不足就显示最多的那个（共6页 1~6）
			middle = 5;
			if (page > middle) {
				middle = page;
			}

			// 共13页 ，当前第12页

			// 前面=middle-5
			before = middle - 5; // middel=12 prev=7 next=13

			if (before <= 0) {
				before = 1;
			}
			// 定后面
			after = before + 9; // 5+9=14
			// 如果最大页面小于 next
			if (after > totalPages) {
				after = totalPages;
				// prev也要变化，不然不会有10个页码
				before = after - 9;
				if (before <= 0) {
					before = 1;
				}
			}
			
			var list = [];
			for (var i = before; i <= after; i++) {
				list.push(i);
			}
			$scope.pageList = list;
		}
		
		//获取当前页样式
		var isActivePage = function(p){
			return p==page;
		}


		/*增，改页面，及其返回验证错误信息默认为隐藏*/
		$scope.addOBJ = true;
		$scope.updateOBJ = true;
		$scope.addError = true;
		/*点击新增数据按钮后，重置所填数据*/
		$scope.add = function(){
			$scope.OBJForAdd =angular.copy($scope.block);
			$scope.addOBJ = false;
		}
		
		/*定义重置后的数据模板，这里定义为全部清空*/
		$scope.block=this.objForJudgement;
		
		//点击取消后所有输入框重置，并隐藏添加页面
		$scope.cancleAdd=function(){
			$scope.OBJ =angular.copy($scope.block);
			$scope.addOBJ = true;
		}
		$scope.cancleUpdate=function(){
			$scope.OBJForUpdate =angular.copy($scope.block);
			$scope.updateOBJ = true;
		}

		
		/*新增*/
		$scope.addConfirm = function(OBJForAdd){
			//给图片地址OBJPhoto赋值
			OBJForAdd.itmesPhoto = angular.element("#url_add").val()?angular.element("#url_add").val():"";
			$http({
				method:"post",
				url:urlAdress+"add"+ObjectName+".do?"+jsonToStr(OBJForAdd),
			}).success(function(data){
				/*先判断是否有传回验证失败的信息*/
				if (data[0].defaultMessage) {
					/*定义一个json格式的errorMessage用于接收错误信息*/
					var errorMessage = "{";
					for(var n in data){
						/*data[n].field是键，data[n].defaultMessage是值*/
						errorMessage +=(data[n].field+":"+data[n].defaultMessage+",");
					}
					var ___last = errorMessage.lastIndexOf(",");            
					errorMessage = errorMessage.substring(0,___last);
					errorMessage += "}";
					
					/*将errorMessage转化为json并赋值给$scope.addErrorMessage*/
					$scope.addErrorMessage = eval("(" + errorMessage + ")");
					/*有错误信息的话，对应的错误将显示出来*/
					$scope.addError = false;
				} else {
					$scope.cancleAdd();
					$http.get(urlAdress+"show"+ObjectName+".do?page="+page+"&size="+$scope.selectPageSize).success(function(data){    		
			    		$scope.data = data.data;
			    		page = data.page;
			    		next = data.next;
			    		prev = data.prev;
			    		totalPages = data.totalPages;
			    		getPageList();
			    		$scope.isActivePage = isActivePage;
			    	});
				}

			})
		}		
		
		/*删除*/
		$scope.delete = function(index,id){
			if($window.confirm("确认删除这条信息？")){
				$scope.data.splice(index,1);
				$http.get(urlAdress+"delete"+ObjectName+".do?id="+id).
				success(function(data){
					$log.info(data);
				})
			}
		}
		
		/*修改前获取要修改的当前数据*/
		$scope.update = function(id){
			$scope.updateOBJ = false;
			$http.get(urlAdress+"find"+ObjectName+".do?id="+id).
			success(function(data){
				$scope.OBJForUpdate = data;
			})
		}
		
		/*修改*/
		$scope.updateConfirm = function(OBJForUpdate){
			//给图片地址OBJPhoto赋值
			OBJForUpdate.itmesPhoto = angular.element("#url_update").val()?angular.element("#url_update").val():null;
			$http({
				method:"post",
				url:urlAdress+"update"+ObjectName+".do?"+jsonToStr(OBJForUpdate),
			}).success(function(data){
				$scope.cancleUpdate();
				$http.get(urlAdress+"show"+ObjectName+".do?page="+page+"&size="+$scope.selectPageSize).success(function(data){    		
		    		$scope.data = data.data;
		    		page = data.page;
		    		next = data.next;
		    		prev = data.prev;
		    		totalPages = data.totalPages;
		    		getPageList();
		    		$scope.isActivePage = isActivePage;
		    	});
			})
		}		

		
    })
    
    //图片是否为空过滤器
    app.filter("hasImage",function(){
    	return function(text){
    		return text? text:"/image/image/noImage.jpg";//无图片可以替换为默认图片地址
    	}
    })
}    