'use strict';

require(['angular','jquery','controllers','directives','filters','services'],function(angular,$){

    // APP DEFINITION
    var threeJsApp = angular.module('threeJsApp',['ngAnimate','ngCookies','ngResource','ngRoute','ngSanitize','ngTouch',
    'controllers','directives','filters','services']);

    // ROUTER CONFIG
    threeJsApp.config(['$routeProvider', '$locationProvider','$logProvider',function($routeProvider,$locationProvider,$logProvider) {
        // TURN ON LOG PROVIDER
        $logProvider.debugEnabled(true);

        // TURN ON HTML5 MODE (REMOVE # FROM ROUTE)
        $locationProvider.html5Mode(true);

        // ROUTER PATHS
        $routeProvider
            .when('/', {
                templateUrl: 'views/cube.html',
                controller: 'CubeCtrl',
                title: 'Cube'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl',
                title: 'About'
            })
            .otherwise({
                redirectTo: '/',
                title: 'Cube'
            });
    }]).run(['$rootScope','$route',function($rootScope,$route){
        $rootScope.title = 'Home';
        $rootScope.$on('$routeChangeSuccess', function() {
            $rootScope.title = $route.current.title;
        });
    }]);

    threeJsApp.controller('MainCtrl',['$rootScope','$log',function($rootScope,$log){
        $log.debug('App Loaded...');
    }]);
    // BOOTSTRAP THE APP
    angular.bootstrap(document, ['threeJsApp']);

    // SET ON WINDOW FOR DEBUGGING
    window.threeJsApp = threeJsApp;
});
