(function () {

    // ----- Init -----

    var app = angular.module("app", ["chart.js", 'ui.bootstrap', 'pascalprecht.translate']);

    app.config(function (ChartJsProvider, $translateProvider) {
        // Configure all charts
        ChartJsProvider.setOptions({
            colours: ['#97BBCD', '#DCDCDC', '#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
            responsive: true,
            animationEasing: "easeOutQuart"
        });
        // Configure all doughnut charts
        ChartJsProvider.setOptions('Doughnut', {
            animateScale: true
        });

        $translateProvider.translations('en', {});
        $translateProvider.translations('fr', {});
        $translateProvider.translations('de', {});
        $translateProvider.preferredLanguage('en');

    });

    // ----- Services -----

    app.factory('userService', ['$rootScope', function ($rootScope) {
        'use strict';
        var userService = {
            voteState: false
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

    app.controller("UserController", function ($scope, userService, $translate) {
        var user = this;
        user.getVoteState = function () {
            return userService.voteState;
        };
        $scope.voteState = userService.voteState;

        $scope.$watch(function ($scope) {
                return $scope.voteState
            },
            function () {
                userService.voteState = $scope.voteState;
            }
        );

        $scope.changeLanguage = function (key) {
            $translate.use(key);
        };
    });


    app.controller("ChartPIBController", function ($scope, $rootScope, userService) {
        $scope.labels = ["Autres", "Education"];
        $scope.getData = function () {
            if (userService.voteState) {
                $scope.investment = 35162;
                // 5.5656312 %
                $scope.data = [94.37, 5.63];
            } else {
                $scope.investment = 34662;
                // 5.54962 %
                $scope.data = [94.45, 5.55];
            }
        };
        $scope.data = $scope.getData();

        $rootScope.$on('userService:voteStateChanged', $scope.getData);
    });
    app.controller("ChartPublicInvestmentController", function ($scope, $rootScope, userService) {
        $scope.labels = ["Autres", "Education"];
        $scope.getData = function () {
            if (userService.voteState) {
                // 17.455954
                $scope.data = [82.34, 17.66];
            } else {
                // 17.4057393
                $scope.data = [82.59, 17.41];
            }
        };
        $scope.data = $scope.getData();

        $rootScope.$on('userService:voteStateChanged', $scope.getData);
    });

    app.controller("ChartPublicInvestmentDetailController", function ($scope, $rootScope, userService) {
        $scope.labels = ["Investissements",
            "Autres dépenses de fonctionnement",
            "Biens, services et marchandises",
            "Rémunération autre personnel",
            "Rémunération enseignants",
            "Bourse d'étude"
        ];
        $scope.getData = function () {
            if (userService.voteState) {
                $scope.data = [8.1, 11.1 - 2.29 , 14.2, 14.8, 51.9, 2.29];
            } else {
                $scope.data = [8.1, 11.1 - 0.88, 14.2, 14.8, 51.9, 0.88];
            }
        };
        $scope.data = $scope.getData();

        $rootScope.$on('userService:voteStateChanged', $scope.getData);
    });



})();