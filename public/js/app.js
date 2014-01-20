'use strict';

angular.module('myApp', [
    'ngTouch',
    'ngRoute',
    'ngAnimate',
    'myApp.controllers',
    'myApp.memoryServices',
     // 3rd party dependencies
 	'btford.socket-io'
    
]).
config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/employees', {templateUrl: 'partials/main.html', controller: 'EmployeeListCtrl'});
    $routeProvider.when('/employees/:employeeId', {templateUrl: 'partials/employee-detail.html', controller: 'EmployeeDetailCtrl'});
    $routeProvider.when('/employees/:employeeId/reports', {templateUrl: 'partials/report-list.html', controller: 'ReportListCtrl'});
    $routeProvider.otherwise({redirectTo: '/employees'});
}]);