(function () {

    // ----- Init -----

    var app = angular.module("app", ["chart.js", 'ui.bootstrap']);

    app.config(function (ChartJsProvider) {
        // Configure all charts
        ChartJsProvider.setOptions({
            colours: ['#97BBCD', '#DCDCDC', '#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
            responsive: true
        });
        // Configure all doughnut charts
        ChartJsProvider.setOptions('Doughnut', {
            animateScale: true
        });
    });

    // ----- Services -----

    app.factory('userService', ['$rootScope', function ($rootScope) {
        'use strict';
        var userService = {
            voteState: true
        };

        // add a listener on a key
        $rootScope.$watch(function () {
            return userService.voteState;
        }, function (newValue) {
            $rootScope.$broadcast('userService:voteStateChanged', newValue);
        }, true);

        return userService;
    }]);

    // ----- Controllers -----

    app.controller("UserController", function ($scope, userService) {
        var user = this;
        user.getVoteState = function () {
            return userService.voteState;
        };
        user.setVoteToYes = function () {
            userService.voteState = true;
        };
        user.setVoteToNo = function () {
            userService.voteState = false;
        }
    });


    app.controller("DoughnutPIBController", function ($scope, $rootScope, userService) {
        $scope.labels = ["Autres", "Formation"];
        $scope.getData = function () {
            if (userService.voteState) {
                $scope.data = [95, 5];
            } else {
                $scope.data = [95, 6];
            }
        };
        $scope.data = $scope.getData();

        $rootScope.$on('userService:voteStateChanged', $scope.getData);
    });

})();