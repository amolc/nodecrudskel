'use strict';

angular.module('myApp.controllers', [])
    .controller('MainCtrl', ['$scope', '$rootScope', '$window', '$location', function ($scope, $rootScope, $window, $location) {
        $scope.slide = '';
        $rootScope.back = function() {
          $scope.slide = 'slide-right';
          $window.history.back();
        }
        $rootScope.go = function(path){
          $scope.slide = 'slide-left';
          $location.url(path);
        }
        
    }])
    .controller('EmployeeListCtrl', ['$scope', 'Employee', function ($scope, Employee,) {
        $scope.employees = Employee.query(); 
       
   		 });
   	 socket.on('send:lastname', function (data) {
        $scope.lastname = data.lastname;
      });
    socket.on('send:tweets', function (data) {
        $scope.tweets = data.tweets;
      });
    socket.on('send:tweetuser', function (data) {
        $scope.tweetuser = data.tweetuser;
      });  
    }])
    .controller('EmployeeDetailCtrl', ['$scope', '$routeParams', 'Employee', function ($scope, $routeParams, Employee) {
        $scope.employee = Employee.get({employeeId: $routeParams.employeeId});
    }])
    .controller('ReportListCtrl', ['$scope', '$routeParams', 'Report', function ($scope, $routeParams, Report) {
        $scope.employees = Report.query({employeeId: $routeParams.employeeId});
    }]);