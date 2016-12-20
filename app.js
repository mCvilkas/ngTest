var myApp = angular.module('myApp', ['ngRoute']);

   // configure our routes
   myApp.config(function($routeProvider, $locationProvider) {
       $routeProvider

           // route for the home page
           .when('/', {
               templateUrl : 'pages/login.html',
                controller  : 'mainController'
           })

           // route for the contact page
           .when('/contact', {
             resolve: {
               "check": function($location, $rootScope) {
                 if(!$rootScope.loggedIn){
                   $location.path('/');
                 }

               }
               },
               templateUrl : 'pages/contact.html',
                controller  : 'contactController'
           })
           .otherwise({
             redirectTo: '/'
           });
      $locationProvider.html5Mode({
         enabled: true,
         requireBase: false
     });
   });
   myApp.controller('loginCtrl', function($scope, $location,$rootScope){
     $scope.submit = function(){
// var uname = $scope.username;
// var password = $scope.password;
if($scope.username == 'admin' && $scope.password == 'admin'){
  $rootScope.loggedIn = true;
  $location.path('/contact');
} else {
  alert('Wrong Password');
}

     };
   });

   // create the controller and inject Angular's $scope
   myApp.controller('mainController', function($scope) {
       // create a message to display in our view
       $scope.message = 'Everyone come and see how good I look!';

   });

   myApp.controller('contactController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
  //      $scope.myFavLanguage = 'None';
  //      $scope.php = function() {
  //        $scope.myFavLanguage = 'PHP';
  //      };
  //      $scope.javascript = function() {
  //        $scope.myFavLanguage = 'Javascript';
  //      };
  //      $scope.c = function() {
  //        $scope.myFavLanguage = 'C#';
  //      };
   });
myApp.controller('contactController', function($scope){
  // $scope.tasks = [];

var taskData = localStorage.tasksList;
if (taskData !== undefined) {
  $scope.tasks = JSON.parse(taskData);
}

  $scope.searchEnter = function(){
  if(event.which ==13 && $scope.task !==""){
    $scope.addTask();
  }
  };
  $scope.addTask = function(){
$scope.tasks.push({'taskMessage':$scope.task, 'status':false});
// console.log($scope.tasks);
$scope.task = '';
localStorage.tasksList= JSON.stringify($scope.tasks);
  };
  $scope.contentEdit = function(msg){
    for (i = 0; i < $scope.tasks.length; i++) {
if($scope.tasks[i].taskMessage == msg){
  $scope.tasks[i].taskMessage = event.target.innerText;
}
    }
    localStorage.tasksList = JSON.stringify($scope.tasks);
     event.target.contentEditable = event.target.contentEditable == "false" ? "true" : "false";

  };
  $scope.statusChanged = function(x){
    if($scope.tasks[x].taskStatus != $scope.tasks[x].taskStatus){
          localStorage.tasksList = JSON.stringify($scope.tasks);
    }

 };
  $scope.enterAgain = function(msg){
    if(event.which == 13 && msg !== ""){
      $scope.contentEdit();
    }
  };
});
