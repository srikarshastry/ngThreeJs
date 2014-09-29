/**
 * Created by hotdog on 9/28/14.
 */

'use strict';

define(['angular'],function(angular){
    angular.module('controllers').controller('CubeCtrl',['$scope',function($scope){
        $scope.canvasWidth = 400;
        $scope.canvasHeight = 400;
        $scope.dofillcontainer = true;
        $scope.scale = 1;
        $scope.materialType = 'lambert';
    }]);
});