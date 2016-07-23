<%--
  Created by IntelliJ IDEA.
  User: kazuhira
  Date: 24/06/16
  Time: 13:22
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html ng-app="iftttApp">
  <head>
    <title>$Title$</title>
  </head>
  <script src="./bower_components/jquery/dist/jquery.js"></script>
  <script src="./bower_components/jquery-ui/jquery-ui.js"></script>
  <script src="./bower_components/angular/angular.js"></script>
  <script src="./bower_components/angular-route/angular-route.js"></script>
  <script src="./bower_components/angular-resource/angular-resource.js"></script>
  <script src="./bower_components/moment/moment.js"></script>
  <script src="./bower_components/bootstrap/dist/js/bootstrap.js"></script>
  <script src="./bower_components/moment-range/dist/moment-range.js"></script>
  <script src="./bower_components/bootstrap-timepicker/js/bootstrap-timepicker.js"></script>
  <script src="./client-engine/engine.js"></script>
  <script src="./bower_components/chosen/chosen.jquery.min.js"></script>
  <script src="./bower_components/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js"></script>
  <script src="./bower_components/bootstrap-slider/bootstrap-slider.js"></script>
  <script src="./bower_components/seiyria-bootstrap-slider/dependencies/js/modernizr.js"></script>
  <script src="./bower_components/seiyria-bootstrap-slider/dist/bootstrap-slider.js"></script>

  <script src="/externalcomponent/angular.min.js"></script>



  <link href="./bower_components/bootstrap/dist/css/bootstrap.css" rel="stylesheet">
  <link rel="stylesheet" href="./bower_components/jquery-ui/themes/base/jquery-ui.css">
  <link rel="stylesheet" href="./bower_components/jquery-ui/themes/base/theme.css">
  <link rel="stylesheet" type="text/css" href="./css/style.css">
  <link rel="stylesheet" type="text/css" href="./css/animate.css">
  <link rel="stylesheet" type="text/css" href="./css/sidebar/simple-sidebar.css">
  <link rel="stylesheet" href="./bower_components/bootstrap-timepicker/css/bootstrap-timepicker.css">
  <link rel="stylesheet" href="./bower_components/bootstrap-chosen/bootstrap-chosen.css">
  <link rel="stylesheet" href="./bower_components/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.css">
  <link rel="stylesheet" href="./bower_components/bootstrap-slider/slider.css">
  <link rel="stylesheet" href="./bower_components/seiyria-bootstrap-slider/dist/css/bootstrap-slider.css">



  <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
  <script src="./bower_components/moment/moment.js"></script>
  <script>src="./bower_componets/moment-timezone/moment-timezone-with-data.js" </script>


  <body ng-controller="homeController">

  <div id="main-container" class="animated fadeIn">
      <div id="top-navbar-container">
          <nav id="top-navbar" class="navbar navbar-default" >
              <div class="container-fluid">
                  <div class="navbar-header">
                      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                          <span class="sr-only">Toggle navigation</span>
                          <span class="icon-bar"></span>
                          <span class="icon-bar"></span>
                          <span class="icon-bar"></span>
                      </button>
                      <a class="navbar-brand" href="#home"><span class="glyphicon glyphicon-home" style="color:#ffffff"></span></a>
                  </div>

          <!-- Collect the nav links, forms, and other content for toggling -->
                  <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                      <ul class="nav navbar-nav">
                          <li><a href="#instructions">How to use</a></li>
                          <li><a href="#registration" >Sign up</a></li>
                          <li><a href="#recoveruserpassword">Forgot password?</a></li>
                          <li class="dropdown">
                              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
                              <ul class="dropdown-menu">
                                  <li><a href="#">Action</a></li>
                                  <li><a href="#">Another action</a></li>
                                  <li><a href="#">Something else here</a></li>
                                  <li role="separator" class="divider"></li>
                                  <li><a href="#">Separated link</a></li>
                                  <li role="separator" class="divider"></li>
                                  <li><a href="#">One more separated link</a></li>
                              </ul>
                          </li>
                      </ul>

                      <form class="navbar-form navbar-right" role="search">
                          <div class="form-group" style="display: inline">
                              <input type="text" class="form-control loggedOUT" placeholder="User" ng-model="user.user" name="user">
                              <input type="password" class="form-control loggedOUT" placeholder="Pwd" ng-model="user.password">
                              <button type="submit" class="btn btn-default form-control loggedOUT" ng-click="login(user)">Login</button>
                          </div>
                          <button type="submit" style="display: none" class="btn btn-default form-control pull-right loggedIN">Logout</button>
                      </form>
                  </div>
              </div>
          </nav>
      </div>

      <div ng-view></div>

  </div>

  </body>
</html>
