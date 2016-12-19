var myApp = angular.module('myApp', ['ngRoute']);

   // configure our routes
   myApp.config(function($routeProvider, $locationProvider) {
       $routeProvider

           // route for the home page
           .when('/', {
               templateUrl : 'pages/main.html',
               controller  : 'mainController'
           })

           // route for the contact page
           .when('/contact', {
               templateUrl : 'pages/contact.html',
               controller  : 'contactController'
           });
      $locationProvider.html5Mode({
         enabled: true,
         requireBase: false
     });
   });

   // create the controller and inject Angular's $scope
   myApp.controller('mainController', function($scope) {
       // create a message to display in our view
       $scope.message = 'Everyone come and see how good I look!';
   });

   myApp.controller('contactController', function($scope) {
       $scope.message = 'Contact us! JK. This is just a demo.';
       $scope.myFavLanguage = 'None';
       $scope.php = function() {
         $scope.myFavLanguage = 'PHP';
       };
       $scope.javascript = function() {
         $scope.myFavLanguage = 'Javascript';
       };
       $scope.c = function() {
         $scope.myFavLanguage = 'C#';
       };
   });
