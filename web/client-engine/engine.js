/**
 * Created by kazuhira on 24/06/16.
 */
var iftttApp = angular.module('iftttApp', [ 'ngRoute', 'ngResource' ]);

iftttApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/home', {
        templateUrl: 'inner-pages/home.html',
        controller: 'homeController'
    });
    $routeProvider.when('/registration', {
        templateUrl: 'inner-pages/registration.html',
        controller: 'registrationController'
    });
    $routeProvider.when('/instructions', {
        templateUrl: 'inner-pages/instructions.html',
        controller: 'instructionController'
    });
    $routeProvider.when('/gCalendar', {
        templateUrl: 'inner-pages/gCalendar.html',
        controller: 'gCalendarController'
    });
    $routeProvider.when('/yWeather', {
        templateUrl: 'inner-pages/yWeather.html',
        controller: 'yWeatherController'
    });
    $routeProvider.when('/yFinance', {
        templateUrl: 'inner-pages/yFinance.html',
        controller:  'yFinanceController'
    });
    $routeProvider.when('/twitter', {
        templateUrl: 'inner-pages/twitter.html',
        controller:  'twitterController'
    });
    $routeProvider.when('/recoveruserpassword', {
        templateUrl: 'inner-pages/recoveryPasswordEUser.html',
        controller:  'recoveruserpasswordController'
    });

    $routeProvider.when('/recoverpassword', {
        templateUrl: 'inner-pages/recoverPassword.html',
        controller:  'recoverpasswordController'
    });

    $routeProvider.when('/gMail', {
        templateUrl: 'inner-pages/gmail.html',
        controller:  'gmailController'
    });

    $routeProvider.when('/login', {
        templateUrl: 'inner-pages/loginPage.html',
        controller:  'loginController'
    });

    $routeProvider.when('/logged_in', {
        templateUrl: 'inner-pages/home_logged.html',
        controller:  'loggedinController'
    });

    $routeProvider.when('/SubGMail', {
        templateUrl: 'inner-pages/gMail_SubTrigger.html',
        controller:  'SubGmailController'
    });

    $routeProvider.when('/SubGMailAction', {
        templateUrl: 'inner-pages/gMail_SubAction.html',
        controller:  'SubGmailActionController'
    });

    $routeProvider.when('/emailSuccess', {
        templateUrl: 'inner-pages/emailSuccess.html',
        controller:  'emailSuccessActionController'
    });

    $routeProvider.when('/cacca', {
        templateUrl: 'demtCode/yWeather.html',
        controller:  'cs'
    });

    $routeProvider.when('/customWeather', {
        templateUrl: 'inner-pages/customWeather.html',
        controller:  'customWeatherActionController'
    });


    $routeProvider.otherwise({redirectTo: '/home'});
}]);


iftttApp.controller('homeController', ['$scope', '$rootScope', '$routeParams', '$http', '$resource',
    function ($scope, $rootscope, $routeParams, $http, $resource) {
        //console.log("Home controller");


        $scope.login = function(user)
        {
            $scope.loginUser = angular.copy(user);


            var userLogin= {
                "username": $scope.loginUser.user,
                "password": $scope.loginUser.password,
            };

            $.ajax({
                method: "post",
                url: "/TempServlet",
                data: userLogin,
                dataType: "json",
                success: console.log("la post ha avuto successo")
            });




            /*
             console.log("Nome utente è:   " + $scope.registration.name);
             console.log("La password 1 è: " + $scope.registration.pass1);
             console.log("La password 2 è: " + $scope.registration.pass2);
             console.log("L' e.mail  è:    " + $scope.registration.email);
             */



        }

    }]);



iftttApp.controller('registrationController', ['$scope', '$rootScope', '$routeParams', '$http', '$resource',
    function ($scope, $rootscope, $routeParams, $http, $resource) {
        $('#registration-form').addClass('animated fadeIn');


        $scope.registration = {};



        $scope.registrationCheck = function(user)
        {
            $scope.registration = angular.copy(user);

            if($scope.registration.pass1==$scope.registration.pass2)
            {


                //GMT+0200
                $scope.str = moment().toString();
                var strs = "How are you doing today?";
                $scope.res =  $scope.str.split(" ");
                //alert($scope.res[5]);
                var timeZoneNumber = $scope.res[5].substring(3, 8);
                var userRegistration= {
                    "username": $scope.registration.name ,
                    "password":$scope.registration.pass1,
                    //"pass2":$scope.registration.pass2,
                    "email":$scope.registration.email,
                    "timezone":timeZoneNumber
                };


                $.ajax({
                    method: "post",
                    url: "/TempServlet",
                    data: userRegistration,
                    dataType: "json",
                    success: console.log("la post ha avuto successo")
                });
                $scope.IsMatch=false;
                return true;
            }
            else
            {
                //alert("Error");
                //document.write("cia");
                $scope.IsMatch=true;
                return false;
            }


            /*
             console.log("Nome utente è:   " + $scope.registration.name);
             console.log("La password 1 è: " + $scope.registration.pass1);
             console.log("La password 2 è: " + $scope.registration.pass2);
             console.log("L' e.mail  è:    " + $scope.registration.email);
             */



        }


    }]);


iftttApp.controller('yWeatherController', ['$scope', '$rootScope', '$routeParams', '$http', '$resource',
    function ($scope, $rootscope, $routeParams, $http, $resource)
    {

        var locationUser= {"_id":707860,"name":"Hurzuf","country":"UA","coord":{"lon":34.283333,"lat":44.549999}};
        var value = 0;

        $scope.weatherBar = value;





        var dataToServer = {
            'weather': {
                'location': null,
                'sunrise': false,
                'sunset': false,
                'tempo': null,
                'thmax': null,
                'thmin': null,
                'timezone': null,
                'period': null,
                'test': 'exampleJSON'
            }};

        $scope.subitmitweather = function (weather) {

            $scope.weatherinput = angular.copy(weather);
            //alert($scope.weatherinput;

            $http.get("resources/city.list.json").then(function(res){
                $scope.citylist=res.data;
                alert($scope.citylist.toJson);
            });

        };



        $('#datetimepicker1').datetimepicker();
        $("#ex7").slider();
        $("#ex8").slider();
        $('.chosen-select').chosen();
        $('.chosen-select-deselect').chosen({ allow_single_deselect: true });
        $('#ex7-enabled').click(function() {
            var vis = $("#min-bar").is(":visible");
            if(vis==true){
                $("#min-bar").fadeOut(this.checked);
                // alert("1");

            }
            else{
                $("#min-bar").fadeIn(this.checked);
                //alert("2");
            }

        });

        $('#ex8-enabled').click(function() {
            var vis = $("#max-bar").is(":visible");
            if(vis==true){
                $("#max-bar").fadeOut(this.checked);
                // alert("1");

            }
            else{
                $("#max-bar").fadeIn(this.checked);
                //alert("2");
            }

        });


        /*
         *  Questa la usiamo per mandare i dati del form del Weather al server, nel campo 'success' ci metteremo la
         *  funzione che reagisce alla rispsota del server
         */
        $('#sendDataWeather').click(function()
        {
            alert(dataToServer.weather.test.toString());
            $.ajax({
                method: "post",
                url: "/TempServlet",
                data: dataToServer,
                dataType: "json",
                success: console.log("la post ha avuto successo) "+dataToServer)
            });

        });

    }]);

iftttApp.controller('recoveruserpasswordController', ['$scope', '$rootScope', '$routeParams', '$http', '$resource',
    function ($scope, $rootscope, $routeParams, $http, $resource) {
        //console.log("Home controller");


        $scope.recoverPasEuser = function(user)
        {
            $scope.recoverUser = angular.copy(user);


            var userLogin= {
                "email": $scope.recoverUser.email
            };

            $.ajax({
                method: "post",
                url: "/TempServlet",
                data: userLogin,
                dataType: "json",
                //success: console.log("la post ha avuto successo")
            });
        }




    }]);


iftttApp.controller('recoverpasswordController', ['$scope', '$rootScope', '$routeParams', '$http', '$resource',
    function ($scope, $rootscope, $routeParams, $http, $resource) {
        //console.log("Home controller");


        $scope.recoverPassVar = {};



        $scope.recoverPassword = function(user)
        {
            $scope.recoverPassVar = angular.copy(user);
            //alert("here");
            if($scope.recoverPassVar.pass1==$scope.recoverPassVar.pass2)
            {

                //Controlli dentro HTLM o dentro engine?
                //  alert("Sending");
                var userRegistration= {
                    "password":$scope.recoverPassVar.pass1

                };

                $.ajax({
                    method: "post",
                    url: "/TempServlet",
                    data: userRegistration,
                    dataType: "json",
                    success: console.log("la post ha avuto successo")
                });
                $scope.IsMatch=false;
                return true;
            }
            else
            {
                //alert("Error");
                //document.write("cia");
                $scope.IsMatch=true;
                return false;
            }
        }




    }]);


iftttApp.controller('gmailController', ['$scope', '$rootScope', '$routeParams', '$http', '$resource',
    function ($scope, $rootscope, $routeParams, $http, $resource) {



        $scope.gmailSubmit = function(user) {

        }

    }]);



iftttApp.controller('loginController', ['$scope', '$rootScope', '$routeParams', '$http', '$resource',
    function ($scope, $rootscope, $routeParams, $http, $resource) {
        $('#registration-form').addClass('animated fadeIn');


        $scope.registration = {};



        $scope.loginCheck = function(user)
        {
            $scope.loginData = angular.copy(user);


            var loginDataSend= {
                "username": $scope.loginData.name,
                "pssword": $scope.loginData.pwd
                //"pass2":$scope.registration.pass2,
                //"email":$scope.registration.email,
                //"timezone":timeZoneNumber
            };

            //alert(loginDataSend.pssword);
            $.ajax({
                method: "post",
                url: "/TempServlet",
                data: loginDataSend,
                dataType: "json",
                success: console.log("la post ha avuto successo")
            });
            $scope.IsMatch=false;
            return true;




            /*
             console.log("Nome utente è:   " + $scope.registration.name);
             console.log("La password 1 è: " + $scope.registration.pass1);
             console.log("La password 2 è: " + $scope.registration.pass2);
             console.log("L' e.mail  è:    " + $scope.registration.email);
             */



        }


    }]);




iftttApp.controller('SubGmailController', ['$scope', '$rootScope', '$routeParams', '$http', '$resource', '$location',
    function ($scope, $rootscope, $routeParams, $http, $resource, $location) {



        $scope.triggerGmail = function(user)
        {
            if (angular.isUndefined( user))
            {
                alert("Almost a field must be completed");

            }
            else
            {
                var view = "SubGMailAction";

                //alert(user.email + "  " + user.subjectReceive);

                if ((angular.isDefined( user.email) && angular.isDefined( user.subjectReceive)) )
                {
                    //Cosa fare se la stringa è vuota? Magari vuole l'email con il subject vuoto?

                    $scope.triggerGmailData = angular.copy(user);
                    var loginDataSend =
                    {
                        "sender:": $scope.triggerGmailData.email,
                        "subject": $scope.triggerGmailData.subjectReceive
                    };
                    //alert(loginDataSend.pssword);
                    $.ajax({
                        method: "post",
                        url: "/TempServlet",
                        data: loginDataSend,
                        dataType: "json",
                        success: console.log("la post ha avuto successo")
                    });
                    //return;
                    //alert("Two defined");


                }

                else
                {
                    if (angular.isDefined( user.subjectReceive))
                    {
                        //Cosa fare se la stringa è vuota? Magari vuole l'email con il subject vuoto?

                        $scope.triggerGmailData = angular.copy(user);
                        var loginDataSend =
                        {
                            "sender:": "null",
                            "subject:": $scope.triggerGmailData.subjectReceive
                        };
                        //alert(loginDataSend.pssword);
                        $.ajax({
                            method: "post",
                            url: "/TempServlet",
                            data: loginDataSend,
                            dataType: "json",
                            success: console.log("la post ha avuto successo")
                        });
                        //return;
                        //alert(" subjectReceive ");


                    }
                    else
                    {
                        if (angular.isDefined( user.email))
                        {
                            //Cosa fare se la stringa è vuota? Magari vuole l'email con il subject vuoto?

                            $scope.triggerGmailData = angular.copy(user);
                            var loginDataSend =
                            {
                                "sender:": $scope.triggerGmailData.email,
                                "subject": "null"
                            };
                            //alert(loginDataSend.pssword);
                            $.ajax({
                                method: "post",
                                url: "/TempServlet",
                                data: loginDataSend,
                                dataType: "json",
                                success: console.log("la post ha avuto successo")
                            });
                            //return;
                            //alert("email defined");


                        }
                        else
                        {
                            alert("You have not completed the form");
                            $location.path(view);
                        }
                    }

                }
                //alert("You have  completed the form");
                $location.path(view);
            }

        }

    }]);





iftttApp.controller('loggedinController', ['$scope', '$rootScope', '$routeParams', '$http', '$resource',
    function ($scope, $rootscope, $routeParams, $http, $resource) {
        $('#registration-form').addClass('animated fadeIn');




    }]);



iftttApp.controller('SubGmailActionController', ['$scope', '$rootScope', '$routeParams', '$http', '$resource', '$location',
    function ($scope, $rootscope, $routeParams, $http, $resource, $location) {



        $scope.actionGmail = function(user)
        {
            if (angular.isUndefined( user))
            {
                alert("Almost a field must be completed");

            }
            else
            {
                var view = "emailSuccess";

                //alert(user.email + "  " + user.subjectReceive);

                if ((angular.isDefined( user.email) && angular.isDefined( user.subjectReceive)) )
                {
                    //Cosa fare se la stringa è vuota? Magari vuole l'email con il subject vuoto?

                    $scope.triggerGmailData = angular.copy(user);
                    var loginDataSend =
                    {
                        "sender:": $scope.triggerGmailData.email,
                        "subject": $scope.triggerGmailData.subjectReceive
                    };
                    //alert(loginDataSend.pssword);
                    $.ajax({
                        method: "post",
                        url: "/TempServlet",
                        data: loginDataSend,
                        dataType: "json",
                        success: console.log("la post ha avuto successo")
                    });
                    //return;
                    //alert("Two defined");


                }

                else
                {
                    if (angular.isDefined( user.subjectReceive))
                    {
                        //Cosa fare se la stringa è vuota? Magari vuole l'email con il subject vuoto?

                        $scope.triggerGmailData = angular.copy(user);
                        var loginDataSend =
                        {
                            "sender:": "null",
                            "subject:": $scope.triggerGmailData.subjectReceive
                        };
                        //alert(loginDataSend.pssword);
                        $.ajax({
                            method: "post",
                            url: "/TempServlet",
                            data: loginDataSend,
                            dataType: "json",
                            success: console.log("la post ha avuto successo")
                        });
                        //return;
                        //alert(" subjectReceive ");


                    }
                    else
                    {
                        if (angular.isDefined( user.email))
                        {
                            //Cosa fare se la stringa è vuota? Magari vuole l'email con il subject vuoto?

                            $scope.triggerGmailData = angular.copy(user);
                            var loginDataSend =
                            {
                                "sender:": $scope.triggerGmailData.email,
                                "subject": "null"
                            };
                            //alert(loginDataSend.pssword);
                            $.ajax({
                                method: "post",
                                url: "/TempServlet",
                                data: loginDataSend,
                                dataType: "json",
                                success: console.log("la post ha avuto successo")
                            });
                            //return;
                            //alert("email defined");


                        }
                        else
                        {
                            alert("You have not completed the form");
                            $location.path(view);
                        }
                    }

                }
                //alert("You have  completed the form");
                $location.path(view);
            }

        }





    }]);
