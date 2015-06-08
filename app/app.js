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
            BRAND: "Initiative sur les bourses d'études",
            MAIN_TITLE: "Initiative sur les bourses d'études. Quelles conséquences?",
            LEAD: 'En cliquant sur <em>"si je vote oui"</em>, la simulation prend en compte le coût de 500 millions avancé par les Conseil fédéral <small>(les dernières estimations avancent un chiffre de 120 millions). Simulation effectuée à partir des statistiques des dépenses de 2012-2013. </small>',
            FB_DESCRIPTION: "Testez les conséquences de l'initiative!",
            WHAT_IF: "Que se passe-t-il?",
            IF_NO: "Si je vote non",
            IF_YES: "Si je vote oui",
            OTHERS: "Autres",
            EDUCATION: "Education",
            INVESTMENT: "Investissements",
            OTHER_SPENDING: "Autres dépenses de fonctionnement",
            GOOD_AND_COMMODITY: "Biens, services et marchandises",
            OTHER_SALARY: "Rémunération autre personnel",
            TEACHERS_SALARY: "Rémunération enseignants",
            STUDY_GRANT: "Bourse d'étude",
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
            CHART3_TITLE: "L'éducation représente {{pourcent}}% des dépenses publiques",
            CHART3_BODY: "<p> \
            En cas d'acception de l'initiative, l'argent public investi dans l'éducation augmenterait \
            légèrement de 17.41 % à 17.46%. \
            </p><p> \
            <small>Source: <a href='http://www.bfs.admin.ch/bfs/portal/fr/index/themen/15/02/data/blank/05.html'> \
            Statistique Suisse – Système d'éducation - Données détaillées</a> \
            </small></p>",
            CHART4_TITLE: "Répartition du montant des dépenses publiques dans l'éducation",
            CHART4_BODY: "<p> <small>Source: <a href='http://www.bfs.admin.ch/bfs/portal/fr/index/themen/15/02/data/blank/05.html'> \
            Statistique Suisse – Système d'éducation - Données détaillées</a></small></p>"
        });
        $translateProvider.translations('de', {
            BRAND: "Stipendieninitiative",
            MAIN_TITLE: 'Stipendieninitiative. Was wären die Folgen?',
            LEAD: 'Bei einem Klick auf <em>"Wenn ich ja stimme"</em> berücksichtig die Simulation die vom Bundesrat veranschlagten  Kosten von 500 Millionen <small>(die neusten Schätzungen beziffern die Kosten mit 120  Millionen). Die Simulation stützt sich auf Ausgabestatistiken der Jahre 2013-2013.</small>',
            FB_DESCRIPTION: "Prüfen die Konsequenzen der Initiative!",
            WHAT_IF: "Was passiert wenn…",
            IF_NO: "…ich Nein stimme?",
            IF_YES: "…ich Ja stimme?",
            OTHERS: "Andere",
            EDUCATION: "Bildung",
            INVESTMENT: "Investitionen",
            OTHER_SPENDING: "Sonstige betriebliche Aufwendungen",
            GOOD_AND_COMMODITY: "Dienstleistungen und Waren",
            OTHER_SALARY: "Entschädigung anderes Personal",
            TEACHERS_SALARY: "Entschädigung Lehrer",
            STUDY_GRANT: "Stipendien",
            CHART1_TITLE: 'Durchschnitsbetrag pro StipendienempfängerIn',
            CHART1_SUB_TITLE_1: "Die Kriterien und Beträge sind nicht harmonisiert.",
            CHART1_SUB_TITLE_2: "L'initiative assure un minimum vital, calculé en fonction des coûts de la formation et du lieu d'étude.",
            CHART1_LAB_PRO_SCHOOl: "Höhere Berufsbildung",
            CHART1_LAB_H_SCHOOL: "Hochschule",
            CHART1_BODY: "<p> \
            Die Stipendien varieren sehr stark von Kanton zu Kanton. Im Kanton Zürich erhalten 0.3% der \
            Bevölkerung einen Durchschnittsbetrag von 3800CHF pro Semester, während in Neuenburg 1% der \
            Bevölkerung einen Durchschnittsbetrag von 1200CHF erhalten. \
            </p><p> \
            Trotzdem finden sich die Studierenden aus verschiedenen Kantonen in denselben Schulen wieder!\
            </p><p>\
            <small>Im Falle einer Annahme der  könnte der Durchschnittsbetrag zwischen zwei Kantonen unterschiedlich sein, aber mit harmonisierten Kriterien.</small> \
            </p><p> \
            <small>Quelle:  \
            <a href='http://www.bfs.admin.ch/bfs/portal/fr/index/themen/15/02/data/blank/05.html'>\
            Statistik Schweiz - Bildungssystem - Detaillierte Daten</a></small></p>",
            CHART2_TITLE: "Die Schweiz investiert {{investment}} Millionen, das sind {{pourcentage}}% des BIP, in Bildung",
            CHART2_BODY: "<p> \
            Im Falle einer Annahme der Stipendieninitiative steigt der investierte Betrag von 5.55% auf 5.63% \
            des BIPs. Im Durchschnitt investieren OECD Länder 5.8% ihres BIPs in Bildung. \
            Eine Länder, wie Dänemark oder Norwegen investieren fast 9% ihres BIPs in die Bildung \
            </p><p> \
            <small>Quelle: <a href='http://www.bfs.admin.ch/bfs/portal/fr/index/themen/15/17/blank/01.indicator.402101.4012.html?open=1,520#520'> \
            Statistik Schweiz – Dépenses publiques d’éducation</a> et <a href='http://www.bfs.admin.ch/bfs/portal/fr/index/themen/15/22/publ.html?publicationID=6359'> \
            Finances du système éducatif - Edition 2014 \
            </a></small></p>",
            CHART3_TITLE: "Die Ausgaben für Bildung machen {{pourcent}}% der öffentlichen Ausgaben aus.",
            CHART3_BODY: "<p> \
            Im Falle einer Annahme der Initiatice, würden die öffentlichen Ausgaben welche auf die Bildung entfallen von 17.41% auf 17.46% steigen. \
            </p><p> \
            <small>Quelle: <a href='http://www.bfs.admin.ch/bfs/portal/fr/index/themen/15/02/data/blank/05.html'> \
            Statistik Schweiz – Système d'éducation - Données détaillées</a> \
            </small></p>",
            CHART4_TITLE: "Verteilung der öffentlichen Ausgaben in der Bildung",
            CHART4_BODY: "<p> <small>Quelle: <a href='http://www.bfs.admin.ch/bfs/portal/fr/index/themen/15/02/data/blank/05.html'> \
            Statistique Suisse – Système d'éducation - Données détaillées</a></small></p>"
        });
        $translateProvider.preferredLanguage('de');
        $translateProvider.useSanitizeValueStrategy(null);
        $locationProvider.html5Mode(true).hashPrefix('!');

    });


    // ----- Services -----


    // ----- Controllers -----

    app.controller("UserController", function ($scope, $rootScope, $translate, $location) {

        $scope.$on('$locationChangeStart', function (event) {
            var search = $location.search();
            if(typeof search['lang'] != 'undefined' && search['lang'] == 'fr'){
                $translate.use('fr');
            } else {
                $translate.use('de');
            }

            $scope.isActive = function($path) {
                var $currentPath = '/';
                if (typeof search['lang'] != 'undefined' && search['lang'] == 'fr')  {
                    $currentPath += '?lang=' + search['lang'];
                }
                if($currentPath == $path){
                    return 'active';
                }
            };
        });





        var search = $location.search();
        $rootScope.embed = 'not-embed';

        if (typeof search['embed'] != 'undefined') {
            $scope.embed = 'embed';
        }

        if (typeof search['lang'] != 'undefined' && search['lang'] == 'fr')  {
            $translate.use('fr');
        }

        $rootScope.$on('$translateChangeSuccess', function () {
            $translate(['MAIN_TITLE']).then(function (translations) {
                document.title = translations.MAIN_TITLE;
            });
        });

    });

    app.controller("ChartCantonController", function ($scope, $rootScope, $translate) {
        $scope.voteState = false;
        $scope.labels = [
            'Zurich'
            , 'Berne'
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

        $rootScope.$on('$translateChangeSuccess', function () {
            $translate(['CHART1_LAB_PRO_SCHOOl', 'CHART1_LAB_H_SCHOOL']).then(function (translations) {
                $scope.series = [translations.CHART1_LAB_PRO_SCHOOl, translations.CHART1_LAB_H_SCHOOL];
            });
        });

        $scope.voteYes = function () {
            $scope.data = [
                [12000, 12000, 12000, 12000, 12000, 12000, 12000, 12000, 12000, 12000, 12000, 12000, 12000, 12000, 12000, 12000, 12000, 12000, 12000, 12000, 12000, 12000, 12000, 12000, 12000, 12000],
                [12000, 12000, 12000, 12000, 12000, 12000, 12000, 12000, 12000, 12000, 12000, 12000, 12000, 12000, 12000, 12000, 12000, 12000, 12000, 12000, 12000, 12000, 12000, 12000, 12000, 12000]
            ];

        };
        $scope.voteNo = function () {
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

        $scope.refreshData = function () {
            if ($scope.voteState) {
                $scope.voteYes();
            } else {
                $scope.voteNo();
            }
        };

        $scope.refreshData();

    });

    app.controller("ChartPIBController", function ($scope, $rootScope, $translate) {
        $scope.voteState = false;

        $scope.labels = ["", ""];

        $rootScope.$on('$translateChangeSuccess', function () {
            $translate(['OTHERS', 'EDUCATION']).then(function (translations) {
                $scope.labels = [translations.OTHERS, translations.EDUCATION];
            });
        });

        $scope.voteYes = function () {
            $scope.investment = 35162;
            // 5.5656312 %
            $scope.data = [94.37, 5.63];
        };
        $scope.voteNo = function () {
            $scope.investment = 34662;
            // 5.54962 %
            $scope.data = [94.45, 5.55];
        };

        $scope.refreshData = function () {
            if ($scope.voteState) {
                $scope.voteYes();
            } else {
                $scope.voteNo();
            }
        };

        $scope.refreshData();

    });
    app.controller("ChartPublicInvestmentController", function ($scope, $rootScope, $translate) {
        $scope.voteState = false;

        $scope.labels = ["", ""];

        $rootScope.$on('$translateChangeSuccess', function () {
            $translate(['OTHERS', 'EDUCATION']).then(function (translations) {
                $scope.labels = [translations.OTHERS, translations.EDUCATION];
            });
        });


        $scope.voteYes = function () {
            // 17.455954
            $scope.data = [82.34, 17.66];
        };
        $scope.voteNo = function () {
            // 17.4057393
            $scope.data = [82.59, 17.41];
        };

        $scope.refreshData = function () {
            if ($scope.voteState) {
                $scope.voteYes();
            } else {
                $scope.voteNo();
            }
        };

        $scope.refreshData();


    });

    app.controller("ChartPublicInvestmentDetailController", function ($scope, $rootScope, $translate) {
        $scope.voteState = false;

        $scope.labels = ["", "", "", "" , "", ""];

        $rootScope.$on('$translateChangeSuccess', function () {
            $translate(['INVESTMENT', 'OTHER_SPENDING', 'GOOD_AND_COMMODITY', 'OTHER_SALARY', 'TEACHERS_SALARY', 'STUDY_GRANT']).then(function (translations) {
                $scope.labels = [
                    translations.INVESTMENT,
                    translations.OTHER_SPENDING,
                    translations.GOOD_AND_COMMODITY,
                    translations.OTHER_SALARY,
                    translations.TEACHERS_SALARY,
                    translations.STUDY_GRANT
                ];
            });
        });


        $scope.voteYes = function () {
            $scope.data = [8.1, 11.1 - 2.29, 14.2, 14.8, 51.9, 2.29];
        };
        $scope.voteNo = function () {
            $scope.data = [8.1, 11.1 - 0.88, 14.2, 14.8, 51.9, 0.88];
        };

        $scope.refreshData = function () {
            if ($scope.voteState) {
                $scope.voteYes();
            } else {
                $scope.voteNo();
            }
        };

        $scope.refreshData();

    });


})();