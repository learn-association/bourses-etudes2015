(function () {

    // ----- Init -----

    var app = angular.module("app", ["chart.js", 'ui.bootstrap', 'pascalprecht.translate']);

    app.config(function (ChartJsProvider, $translateProvider, $locationProvider) {
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

        $translateProvider.translations('fr', {
            SITE_TITLE: "Initiative sur les bourses d'études. Quelles conséquences?",
            MAIN_TITLE: "Initiative sur les bourses d'études. Quelles conséquences?",
            LEAD: 'En cliquant sur <em>"si je vote oui"</em>, la simulation prend en compte le coût de 500 millions avancé par les Conseil fédéral <small>(les dernières estimations avancent un chiffre de 120 millions). Simulation effectuée à partir des statistiques des dépenses de 2012-2013. </small>',
            WHAT_IF: "Que se passe-t-il?",
            IF_NO: "Si je vote non",
            IF_YES: "Si je vote oui",
            CHART1_TITLE: 'Montant moyen des bourses par bénéficiaire.',
            CHART1_SUB_TITLE_1: "Les critères et les montants ne sont pas harmonisés.",
            CHART1_SUB_TITLE_2: "L'initiative assure un minimum vital, calculé en fonction des coûts de la formation et du lieu d'étude.",
            CHART1_LAB_PRO_SCHOOl: "Formation professionelles supérieure",
            CHART1_LAB_H_SCHOOL: "Haute école",
            CHART1_BODY: "<p> \
            Les bourses d’études varient fortement selon les cantons. Dans le canton de Zurich 0.3% de \
            la population reçoit en moyenne 3’800 francs par semestre pendant qu’à Neuchâtel 1% de la \
            population du canton touche en moyenne 1200 francs par semestre. \
            </p><p> \
            Pourtant ces étudiants de différent cantons se retrouvent souvent dans les mêmes écoles!\
            </p><p>\
            <small>En cas de oui, le montant moyen pourrait différer d'un canton à l'autre, mais sur des critères harmonisés</small> \
            </p><p> \
            <small>Source:  \
            <a href='http://www.bfs.admin.ch/bfs/portal/fr/index/themen/15/02/data/blank/05.html'>\
            Statistique Suisse – Système d'éducation - Données détaillées</a></small></p>",
            CHART2_TITLE: "La Suisse investit {{investment}} millions, soit {{pourcentage}} du PIB dans l'éducation",
            CHART2_BODY: "<p> \
            En cas d'acceptation de l'initiative, le montant investi augmenterait légèrement de 5.55 à 5.63% \
            du PIB. En moyenne, les pays de l'OCDE investissent 5.8% de leur PIB dans l'éducation. \
            Certains pays, comme le Danemark et la Norvège, investissent près de 9% de leur PIB dans la \
            formation. \
            </p><p> \
            <small>Source: <a href='http://www.bfs.admin.ch/bfs/portal/fr/index/themen/15/17/blank/01.indicator.402101.4012.html?open=1,520#520'> \
            Statistique Suisse – Dépenses publiques d’éducation</a> et <a href='http://www.bfs.admin.ch/bfs/portal/fr/index/themen/15/22/publ.html?publicationID=6359'> \
            Finances du système éducatif - Edition 2014 \
            </a></small></p>",
            CHART3_TITLE : "L'éducation représente {{pourcent}}% des dépenses publiques",
            CHART3_BODY : "<p> \
            En cas d'acception de l'initiative, l'argent public investi dans l'éducation augmenterait \
            légèrement de 17.41 % à 17.46%. \
            </p><p> \
            <small>Source: <a href='http://www.bfs.admin.ch/bfs/portal/fr/index/themen/15/02/data/blank/05.html'> \
            Statistique Suisse – Système d'éducation - Données détaillées</a> \
            </small></p>",
            CHART4_TITLE :"Répartition du montant des dépenses publiques dans l'éducation",
            CHART4_BODY: "<p> <small>Source: <a href='http://www.bfs.admin.ch/bfs/portal/fr/index/themen/15/02/data/blank/05.html'> \
            Statistique Suisse – Système d'éducation - Données détaillées</a></small></p>",
        });
        $translateProvider.translations('de', {
            MAIN_TITLE: 'Stipendieninitiative. Was wären die Folgen?',
            LEAD: 'Bei einem Klick auf <em>"Wenn ich ja stimme"</em> berücksichtig die Simulation die vom Bundesrat veranschlagten  Kosten von 500 Millionen <small>(die neusten Schätzungen beziffern die Kosten mit 120  Millionen). Die Simulation stützt sich auf Ausgabestatistiken der Jahre 2013-2013.</small>'
        });
        $translateProvider.preferredLanguage('fr');

        $locationProvider.html5Mode(false).hashPrefix('!');

    });



    // ----- Services -----


    // ----- Controllers -----

    app.controller("UserController", function ($scope, $translate, $location) {

        $scope.$on('$locationChangeStart', function(event) {
            var search = $location.search();
            $translate.use(search['lang']);
        });

        var search = $location.search();

        if(typeof search['lang'] == 'undefined') {
            $location.path('/').search({'lang' : 'fr'}).replace();
        } else {
            $translate.use(search['lang']);
        }

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