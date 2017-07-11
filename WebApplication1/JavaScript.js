/// <reference path="C:\Users\aesmailzadeh\Desktop\IISNet\WebApplication1\angular.min.js" />
var app = angular
            .module("Demo", ["ngRoute"])
            .config(function ($routeProvider, $locationProvider) {
                $routeProvider
                    .when("/home", {
                        templateUrl: "HtmlPage1.html",
                        controller: "homeController"
                    })
                    .when("/inactives", {
                         templateUrl: "inactives.html",
                         controller: "inactiveController"

                    })
                    .when("/qanda", {
                        templateUrl: "qanda.html",
                        controller: "qandaController"

                    })
                    .when("/answered", {
                         templateUrl: "Answered.html",
                         controller: "answeredController"

                    })
                   .otherwise({
                       templateUrl: "Page3.html",
                       controller: "homeController"
                   })
                $locationProvider.html5Mode(true);
            })

             .controller("homeController", ['$scope', '$http',

                function ($scope, $http) {
                    //  $scope.FNme = sessionStorage.FN;
                    //  $scope.LNme = sessionStorage.LN;
                    $scope.FNme = sessionStorage.PerN;
                    $scope.MCme = sessionStorage.MC;
                    if (sessionStorage.FN == 'kyoon@appcogroup.com.au')
                    { $scope.showme = 'True';};
                  
                    
                    $http({
                        url: '/api/infos/',
                        method: "GET",
                        params: { MC: sessionStorage.MC },
                        headers: { 'Authorization': 'Basic ' + btoa(sessionStorage.FN + ':' + sessionStorage.LN) },
                    })
                       .then(function (response) {

                           $scope.infos = response.data;

                           return $http({
                               url: '/api/sums/',
                               method: "GET",
                               params: { MC: sessionStorage.MC },
                               headers: { 'Authorization': 'Basic ' + btoa(sessionStorage.FN + ':' + sessionStorage.LN) },
                           });
                       }, function (error) {
                           { alert('There is an Error in here!') }
                           console.error(error);
                       }).then(function (response) {
                           $scope.sums = response.data;
                       }, function (error) {
                           { alert('There is an Error in here!') }
                           console.error(error);
                       });

                    $scope.InsertIC = function (ic, na) {
                        $http({
                            url: '/api/insert/insertic',
                            method: 'GET',
                            params: { iPadId: ic, Name: na },
                            headers: { 'Authorization': 'Basic ' + btoa(sessionStorage.FN + ':' + sessionStorage.LN) },
                        })
                        .then(function (response) {
                            console.log("Data Inserted Successfully");

                           

                        }, function (error) {
                            alert("Sorry! Data Couldn't be inserted!");
                            console.error(error);
                        });
                       
                    };


                }])
                    
              .controller("qandaController", ['$scope', '$http',

                function ($scope, $http) {
                    //  $scope.FNme = sessionStorage.FN;
                    //  $scope.LNme = sessionStorage.LN;
                    $scope.FNme = sessionStorage.PerN;
                    $scope.MCme = sessionStorage.MC;
                    $http({
                        url: '/api/qa/',
                        method: "GET",
                      //  params: { MC: sessionStorage.MC },
                        headers: { 'Authorization': 'Basic ' + btoa(sessionStorage.FN + ':' + sessionStorage.LN) },
                    })
                       .then(function (response) {

                           $scope.qandas = response.data;

                       }, function (error) {
                           { alert('There is an Error in here!') }
                           console.error(error);
                       });


                    $scope.UpdateA = function (id, an) {
                        $http({
                            url: '/api/insert/updateQA',
                            method: 'GET',
                            params: { Id: id, Answer: an },
                            headers: { 'Authorization': 'Basic ' + btoa(sessionStorage.FN + ':' + sessionStorage.LN) },
                        })
                        .then(function (response) {
                            console.log("Data Inserted Successfully");



                        }, function (error) {
                            alert("Sorry! Data Couldn't be inserted!");
                            console.error(error);
                        });

                    };


                }])

               .controller("answeredController", ['$scope', '$http',

                function ($scope, $http) {
                    //  $scope.FNme = sessionStorage.FN;
                    //  $scope.LNme = sessionStorage.LN;
                    $scope.FNme = sessionStorage.PerN;
                    $scope.MCme = sessionStorage.MC;
                    $http({
                        url: '/api/answered/',
                        method: "GET",
                        //  params: { MC: sessionStorage.MC },
                        headers: { 'Authorization': 'Basic ' + btoa(sessionStorage.FN + ':' + sessionStorage.LN) },
                    })
                       .then(function (response) {

                           $scope.qas = response.data;

                       }, function (error) {
                           { alert('There is an Error in here!') }
                           console.error(error);
                       });


                    $scope.InsertNewQ = function () {
                        $http({
                            url: '/api/insert/insertqa',
                            method: 'GET',
                            params: { Question: $scope.NewQ },
                            headers: { 'Authorization': 'Basic ' + btoa(sessionStorage.FN + ':' + sessionStorage.LN) },
                        })
                        .then(function (response) {
                            alert("Thank you for your Question. It will appear here once it's answered.");



                        }, function (error) {
                            alert("Sorry! Data Couldn't be inserted!");
                            console.error(error);
                        });

                    };


                }])

             .controller("inactiveController", ['$scope', '$http',

                function ($scope, $http) {
                    //  $scope.FNme = sessionStorage.FN;
                    //  $scope.LNme = sessionStorage.LN;
                    $scope.FNme = sessionStorage.PerN;
                    $scope.MCme = sessionStorage.MC;
                    $http({
                        url: '/api/inactives/',
                        method: "GET",
                        params: { MC: sessionStorage.MC },
                        headers: { 'Authorization': 'Basic ' + btoa(sessionStorage.FN + ':' + sessionStorage.LN) },
                    })
                       .then(function (response) {

                           $scope.inactives = response.data;
                                                    
                       }, function (error) {
                           { alert('There is an Error in here!') }
                           console.error(error);
                       });


                    $scope.InsertIC = function (ic, na) {
                        $http({
                            url: '/api/insert/insertic',
                            method: 'GET',
                            params: { iPadId: ic, Name: na },
                            headers: { 'Authorization': 'Basic ' + btoa(sessionStorage.FN + ':' + sessionStorage.LN) },
                        })
                        .then(function (response) {
                            console.log("Data Inserted Successfully");
                                                     

                        }, function (error) {
                            alert("Sorry! Data Couldn't be inserted!");
                            console.error(error);
                        });
                       
                    };


                }]);


var app = angular.module('myApp', []);
app.controller('formCtrl', function ($http, $scope) {
    $scope.login = function () {
        $http({
            url: '/api/users/',
            method: "GET",
            params: { Username: $scope.firstname, Password: $scope.lastname },
            headers: { 'Authorization': 'Basic ' + btoa($scope.firstname + ':' + $scope.lastname) },
        })
        .then(function (response) {

            $scope.users = response.data;
            if (response.data[0]['LocationName'] == null)
            { alert('User name or Password is incorrect!') }
            else
            {
                sessionStorage.PerN = response.data[0]['FirstName'];
                sessionStorage.MC = response.data[0]['LocationName'];
                sessionStorage.FN = $scope.firstname;
                sessionStorage.LN = $scope.lastname;
                window.location.href = "/home";
            }
        }
        , function (error) {
            { alert('User name or Password is incorrect!') }
            $scope.hideme = 'false';
            console.error(error);
        });
    }

});
