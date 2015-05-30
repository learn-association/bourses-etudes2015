(function () {

    // ----- Init -----

    var app = angular.module("app", ["chart.js", 'ui.bootstrap', 'pascalprecht.translate']);

    app.config(function (ChartJsProvider, $translateProvider) {
        // Configure all charts
        ChartJsProvider.setOptions({
            colours: ['#97BBCD', '#DCDCDC', '#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
            responsive: true,
            // animationEasing: "easeOutQuart",
            animationSteps: 50,
            showTooltips: true
        });
        // Configure all doughnut charts
        ChartJsProvider.setOptions('Doughnut', {});

        ChartJsProvider.setOptions('Bar', {
            // Boolean - If we want to override with a hard coded scale
            scaleOverride: true,

            // ** Required if scaleOverride is true **
            // Number - The number of steps in a hard coded scale
            scaleSteps: 8,
            // Number - The value jump in the hard coded scale
            scaleStepWidth: 2000,
            // Number - The scale starting value
            scaleStartValue: 0

        });

        $translateProvider.translations('en', {});
        $translateProvider.translations('fr', {});
        $translateProvider.translations('de', {});
        $translateProvider.preferredLanguage('fr');

    });

    // ----- Services -----


    // ----- Controllers -----

    app.controller("UserController", function ($scope, $translate) {
        var user = this;

        $scope.changeLanguage = function (key) {
            alert('Translation is not available for the moment. Thanks for your understanding. If you want to help: https://github.com/learn-association/bourses-etudes2015/issues');
            $translate.use(key);
        };
    });

    app.controller("ChartCantonController", function ($scope) {
        $scope.voteState = false;
        $scope.labels = [
            'Zurich',
            'Berne'
            , 'Lucerne'
            , 'Uri'
            , 'Schwyz'
            , 'Obwald'
            , 'Nidwald'
            , 'Glaris'
            , 'Zoug'
            , 'Fribourg'
            , 'Soleure'
            , 'Bâle-Ville'
            , 'Bâle-Campagne'
            , 'Schaffhouse'
            , 'Appenzell Rh.-E.'
            , 'Appenzell Rh.-I.'
            , 'Saint-Gall'
            , 'Grisons'
            , 'Argovie'
            , 'Thurgovie'
            , 'Tessin'
            , 'Vaud'
            , 'Valais'
            , 'Neuchâtel'
            , 'Genève'
            , 'Jura'
        ];

        $scope.series = ['Formation professionelles supérieure', 'Haute école'];

        $scope.voteYes = function () {
                $scope.data = [
                    [12000, 12000, 12000, 12000, 12000, 12000, 12000, 12000, 12000, 12000, 12000, 12000, 12000, 12000, 12000, 12000, 12000, 12000, 12000, 12000, 12000, 12000, 12000, 12000, 12000, 12000],
                    [12000, 12000, 12000, 12000, 12000, 12000, 12000, 12000, 12000, 12000, 12000, 12000, 12000, 12000, 12000, 12000, 12000, 12000, 12000, 12000, 12000, 12000, 12000, 12000, 12000, 12000]
                ];

            };
        $scope.voteNo = function() {
                $scope.data = [
                    [
                        10017,
                        8861,
                        4864,
                        7565,
                        7481,
                        5207,
                        6519,
                        7969,
                        8336,
                        6740,
                        6532,
                        6554,
                        7647,
                        4504,
                        7320,
                        3890,
                        5324,
                        6409,
                        7382,
                        7572,
                        6572,
                        13994,
                        4808,
                        4003,
                        9593,
                        6862
                    ],
                    [
                        9985,
                        9192,
                        5956,
                        6621,
                        8356,
                        10560,
                        9053,
                        10552,
                        9120,
                        7037,
                        7360,
                        7070,
                        7024,
                        6071,
                        6593,
                        7840,
                        6244,
                        6564,
                        10119,
                        7360,
                        9310,
                        11268,
                        6630,
                        6628,
                        9978,
                        8698
                    ]
                ];
        };

        $scope.refreshData = function(){
            if($scope.voteState){
                $scope.voteYes();
            } else {
                $scope.voteNo();
            }
        };

        $scope.refreshData();

    });

    app.controller("ChartPIBController", function ($scope) {
        $scope.voteState = false;

        $scope.labels = ["Autres", "Education"];


        $scope.voteYes = function () {
                $scope.investment = 35162;
                // 5.5656312 %
                $scope.data = [94.37, 5.63];
        };
        $scope.voteNo = function() {
                $scope.investment = 34662;
                // 5.54962 %
                $scope.data = [94.45, 5.55];
        };

        $scope.refreshData = function(){
            if($scope.voteState){
                $scope.voteYes();
            } else {
                $scope.voteNo();
            }
        };

        $scope.refreshData();

    });
    app.controller("ChartPublicInvestmentController", function ($scope) {
        $scope.voteState = false;

        $scope.labels = ["Autres", "Education"];


        $scope.voteYes = function () {
            // 17.455954
            $scope.data = [82.34, 17.66];
        };
        $scope.voteNo = function() {
            // 17.4057393
            $scope.data = [82.59, 17.41];
        };

        $scope.refreshData = function(){
            if($scope.voteState){
                $scope.voteYes();
            } else {
                $scope.voteNo();
            }
        };

        $scope.refreshData();


    });

    app.controller("ChartPublicInvestmentDetailController", function ($scope) {
        $scope.voteState = false;

        $scope.labels = ["Investissements",
            "Autres dépenses de fonctionnement",
            "Biens, services et marchandises",
            "Rémunération autre personnel",
            "Rémunération enseignants",
            "Bourse d'étude"
        ];
        $scope.voteYes = function () {
            $scope.data = [8.1, 11.1 - 2.29, 14.2, 14.8, 51.9, 2.29];
        };
        $scope.voteNo = function() {
                $scope.data = [8.1, 11.1 - 0.88, 14.2, 14.8, 51.9, 0.88];
        };

        $scope.refreshData = function(){
            if($scope.voteState){
                $scope.voteYes();
            } else {
                $scope.voteNo();
            }
        };

        $scope.refreshData();

    });


})();