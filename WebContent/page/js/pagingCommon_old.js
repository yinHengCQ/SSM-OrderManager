//url:连接后台的地址
var pagingInit = function(appName,controllerName,url,addHtmlUrl){   
	
	var app = angular.module(appName, ['ui.bootstrap']); 
	
    app.controller(controllerName,function($scope,$log,$http,$modal){  	
    	var page = 1;
    	var next = "";
    	var prev = "";
    	var totalPages = "";
    	
    	var midle = 0;
    	var before = 0;
    	var after = 0;
    	
    	$scope.pageSize = [1,2,3,5,10,20];
    	
    	$http.get(url).success(function(data){    		
    		$scope.data = data.data;
    		page = data.page;
    		next = data.next;
    		prev = data.prev;
    		totalPages = data.totalPages;
    		getPageList();
    		$scope.isActivePage = isActivePage;
    	});
    	
    	$scope.changeSize = function(){
        	$http.get(url+"?size="+$scope.selectPageSize).success(function(data){
        		$scope.data = data.data;
        		page = data.page;
        		next = data.next;
        		prev = data.prev;
        		totalPages = data.totalPages;
        		getPageList();
        		$scope.isActivePage = isActivePage;
        	});    		
    	}
    	
    	$scope.selectPage = function(p){
    		$http.get(url+"?page="+p+"&size="+$scope.selectPageSize).success(function(data){
				$scope.data = data.data;
				page = data.page;
	    		next = data.next;
	    		prev = data.prev;
    		})
    	}
    	
		$scope.Next = function(){
			if (page==totalPages) {
				return false;
			}
			$http.get(url+"?page="+next+"&size="+$scope.selectPageSize).success(function(data){
				$scope.data = data.data;
				page = data.page;
	    		next = data.next;
	    		prev = data.prev;	    		
			})
		}
		
		$scope.Previous = function(){
			if (page==1) {
				return false;
			}
			$http.get(url+"?page="+prev+"&size="+$scope.selectPageSize).success(function(data){
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

		
		//添加数据
		$scope.add = function(){
		 	var modalInstance = $modal.open({
				templateUrl : addHtmlUrl,
				controller : con,
				keyboard : false,
				backdrop : "static"
			})
		}
		
		var con = function($scope,$modalInstance){
			$scope.cancle = function(){
				$modalInstance.dismiss();
			}			
		}
		
		$scope.addItmes = false;
		$scope.toggle = function(){
			$scope.addItmes = !$scope.addItmes;
		}


    })
}    