<?php
  $lang = 'de';
  $fb_url = 'http://stipendieninitiative.learn-association.ch/';
  if(isset($_GET['lang'])){
    if($_GET['lang'] == 'fr') {
      $lang = 'fr';
      $fb_url = 'http://stipendieninitiative.learn-association.ch/?lang=fr';
    }
  }
?>
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <?php if($lang == 'fr'): ?>
    <meta property="og:title" content="Initiative sur les bourses d'études. Quelles conséquences?">
    <meta property="og:description" content="Testez les conséquences de l'initiative!">
  <?php else: ?>
    <meta property="og:title" content="Stipendieninitiative. Was wären die Folgen?">
    <meta property="og:description" content="Prüfen die Folgen der Initiative!">
  <?php endif; ?>
  <meta property="og:url" content="<?php print $fb_url; ?>">
  <meta property="og:image" content="http://stipendieninitiative.learn-association.ch/chart2.png">
  <meta property="og:type" content="article">
  <meta property="fb:app_id" content="1587196631554813">

  <base href=".">
  <meta name="fragment" content="!"/>
  <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
  <title>Initiative sur les bourses d'études. Quelles conséquences?</title>

  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
  <link rel="stylesheet" href="bower_components/angular-chart.js/dist/angular-chart.css">

  <style>
    .h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h5, h6 {
      font-weight: 300;
    }

    h2 {
      font-size: 23px;
    }

    .navbar {
      margin-bottom: 0;
    }

    .top-header {
      background-color: #FFF;
      padding-top: 5px;
      padding-bottom: 28px;
      text-align: left;
      width: 100%;

    }

    .top-header h1 {
      font-weight: 500;
    }

    .radio-ctrl {
      padding: 10px;
    }

    .form-inline .radio label {
      padding-left: 6px;
      font-size: 14px;
      font-weight: 400;
    }
    .radio input[type="radio"] {
      margin-left: 0;
      position: static;
    }

    input[type="radio"]:focus {
      outline: none;
    }

    .form-inline {
      margin-top: 20px;
      margin-bottom: 20px;
    }

    .thumbnail {
      margin-bottom: 50px;
    }
    nav.embed {
      display: none;
    }


  </style>

  <!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
  <![endif]-->
</head>

<body ng-app="app">
<div id="fb-root"></div>
<script>
  window.fbAsyncInit = function () {
    FB.init({
      appId: '1587196631554813',
      xfbml: true,
      version: 'v2.3'
    });
  };

  (function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
      return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
</script>

<!-- Static navbar -->
<nav ng-controller="UserController as user" class="navbar navbar-default navbar-static-top" ng-class="embed">
  <div class="js-navbar container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
              aria-expanded="false" aria-controls="navbar">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" translate="BRAND" href="/"></a>


    </div>

    <div id="navbar" class="navbar-collapse collapse">
      <ul class="nav navbar-nav">

      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li ng-class="isActive('/')">
          <a href="/" class="" >Deutsch</a>
        </li>
        <li ng-class="isActive('/?lang=fr')">
          <a href="/?lang=fr" class="" >Français</a>
        </li>
      </ul>

      <div class="navbar-text fb-like" data-href="<?php print $fb_url; ?>"
           data-layout="standard" data-action="like" data-show-faces="false" data-share="true"></div>


    </div>
    <!--/.nav-collapse -->
  </div>
</nav>


<header class="top-header">
  <div class="container">
    <div class="row">

      <div class="col-md-12">
        <h1 translate="MAIN_TITLE"></h1>

      </div>
      <div class="col-md-10 head">
        <p class="lead" translate="LEAD"></p>
      </div>

    </div>
  </div>
</header>

<div class="container main-content">


  <div class="row" ng-controller="ChartCantonController">

    <div class="col-md-12">
      <h2><span translate="CHART1_TITLE"></span><br/>
        <small ng-if="!voteState"><span translate="CHART1_SUB_TITLE_1"></span></small>
        <small ng-if="voteState"><span translate="CHART1_SUB_TITLE_2"></span></small>
      </h2>
    </div>

    <!--form -->
    <div class="col-md-6">
      <form class="form-inline">
        <div class="form-group">
          <label class="control-label" translate="WHAT_IF"></label>

          <div class="radio">
            <label class="bg-danger radio-ctrl">
              <input type="radio" name="voteState" ng-model="voteState" ng-value="false"
                     ng-change="refreshData()">
              <span translate="IF_NO"></span>
            </label>
          </div>
          <div class="radio">
            <label class="bg-success radio-ctrl">
              <input type="radio" name="voteState" ng-model="voteState" ng-value="true"
                     ng-change="refreshData()">
              <span translate="IF_YES"></span>
            </label>
          </div>
        </div>
      </form>
    </div>
    <!--End form -->

    <div class="col-md-12">
      <div class="thumbnail">
        <div class="row">
          <div class="col-md-12">
            <canvas id="chartCanton" class="chart chart-bar" data="data" labels="labels" series="series"
                    legend="true"></canvas>
          </div>
        </div>

        <div class="caption" translate="CHART1_BODY"></div>
      </div>

    </div>

  </div>


  <div class="row" ng-controller="ChartPIBController">

    <div class="col-md-12">
      <h2 translate="CHART2_TITLE" translate-values='{ investment: investment, pourcentage: data[1]}'></h2>
    </div>
    <!--form -->
    <div class="col-md-7">
      <form class="form-inline">
        <div class="form-group">
          <label class="control-label" translate="WHAT_IF"></label>

          <div class="radio">
            <label class="bg-danger radio-ctrl">
              <input type="radio" name="voteState" ng-model="voteState" ng-value="false"
                     ng-change="refreshData()">
              <span translate="IF_NO"></span>
            </label>
          </div>
          <div class="radio">
            <label class="bg-success radio-ctrl">
              <input type="radio" name="voteState" ng-model="voteState" ng-value="true"
                     ng-change="refreshData()">
              <span translate="IF_YES"></span>
            </label>
          </div>
        </div>
      </form>
    </div>

    <!--End form -->
    <div class="col-md-12">
      <div class="thumbnail">
        <div class="row">
          <div class="col-md-8 col-md-offset-2">
            <canvas id="doughnutPIB" class="chart chart-doughnut chart-sm" data="data" labels="labels"
                    legend="true"></canvas>
          </div>
        </div>

        <div class="caption" translate="CHART2_BODY"></div>
      </div>

    </div>


  </div>

  <div class="row" ng-controller="ChartPublicInvestmentController">
    <div class="col-md-12">
      <h2 translate="CHART3_TITLE" translate-values="{ pourcent: data[1] }"></h2>
    </div>

    <!--form -->
    <div class="col-md-12">
      <form class="form-inline">
        <div class="form-group">
          <label class="control-label" translate="WHAT_IF"></label>

          <div class="radio">
            <label class="bg-danger radio-ctrl">
              <input type="radio" name="voteState" ng-model="voteState" ng-value="false"
                     ng-change="refreshData()">
              <span translate="IF_NO"></span>
            </label>
          </div>
          <div class="radio">
            <label class="bg-success radio-ctrl">
              <input type="radio" name="voteState" ng-model="voteState" ng-value="true"
                     ng-change="refreshData()">
              <span translate="IF_YES"></span>
            </label>
          </div>
        </div>
      </form>
    </div>
    <!--End form -->
    <div class="col-md-12">
      <div class="thumbnail">
        <div class="row">
          <div class="col-md-8 col-md-offset-2">
            <canvas id="doughnutDepensePublic" class="chart chart-doughnut" data="data" labels="labels"
                    legend="true"></canvas>
          </div>
        </div>
        <div class="caption" translate="CHART3_BODY">

        </div>
      </div>
    </div>

  </div>

  <div class="row" ng-controller="ChartPublicInvestmentDetailController">


    <div class="col-md-12">
      <h2 translate="CHART4_TITLE"></h2>
    </div>
    <!--form -->
    <div class="col-md-7">
      <form class="form-inline">
        <div class="form-group">
          <label class="control-label" translate="WHAT_IF"></label>

          <div class="radio">
            <label class="bg-danger radio-ctrl">
              <input type="radio" name="voteState" ng-model="voteState" ng-value="false"
                     ng-change="refreshData()">
              <span translate="IF_NO"></span>
            </label>
          </div>
          <div class="radio">
            <label class="bg-success radio-ctrl">
              <input type="radio" name="voteState" ng-model="voteState" ng-value="true"
                     ng-change="refreshData()">
              <span translate="IF_YES"></span>
            </label>
          </div>
        </div>
      </form>
    </div>
    <!--End form -->

    <div class="col-md-12">
      <div class="thumbnail">
        <div class="row">
          <div class="col-md-8 col-md-offset-2">
            <canvas id="chartDepensePublicDetail" class="chart chart-doughnut" data="data" labels="labels"
                    legend="true"></canvas>
          </div>
        </div>
        <div class="caption" translate="CHART4_BODY"></div>
      </div>
    </div>


  </div>
  <!-- FB -->
  <div class="row">
    <div class="col-md-12">
      <p>
      <div class="fb-like" data-href="<?php print $fb_url; ?>"
           data-layout="standard" data-action="like" data-show-faces="true" data-share="true"></div>
      </p>
    </div>
  </div>


  <footer class="row">
    <div class="col-md-12">
      <br/>

      <p class="">By <a href="mailto:perdrisat+bourses2015@gmail.com">Simon Perdrisat</a> – <a
          href="https://github.com/learn-association/bourses-etudes2015">Project on github</a></p>
    </div>
    <div class="col-md-12">

      <p xmlns:dct="http://purl.org/dc/terms/" xmlns:vcard="http://www.w3.org/2001/vcard-rdf/3.0#">
        <a rel="license"
           href="http://creativecommons.org/publicdomain/zero/1.0/">
          <img src="http://i.creativecommons.org/p/zero/1.0/88x31.png" style="border-style: none;" alt="CC0"/>
        </a>
        <br/>
        To the extent possible under law,
        <a rel="dct:publisher"
           href="http://www.linkedin.com/in/simonperdrisat">
          <span property="dct:title">Perdrisat Simon</span></a>
        has waived all copyright and related or neighboring rights to
        <span property="dct:title">Initiative sur les bourses d'études. Quelles conséquences?</span>.
        This work is published from:
<span property="vcard:Country" datatype="dct:ISO3166"
      content="CH" about="http://stipendieninitiative.learn-association.ch/">
  Switzerland</span>.
      </p>
    </div>
  </footer>


</div>


<!-- JS Libs -->
<script src="bower_components/angular/angular.js"></script>
<script src="angular/i18n/angular-locale_de-ch.js"></script>

<script src="bower_components/jquery/dist/jquery.min.js"></script>

<script src="bower_components/angular-bootstrap/ui-bootstrap.min.js"></script>

<script src="bower_components/angular-translate/angular-translate.min.js"></script>

<script src="bower_components/Chart.js/Chart.js"></script>

<script src="bower_components/angular-chart.js/dist/angular-chart.js"></script>

<script src="app/app.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>


</body>
</html>