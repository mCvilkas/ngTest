var app = angular.module('myLanguageApp',['ngRoute']);

app.config(function($routeProvider) {
$routeProvider
.when('/',{
  templateUrl: '/pages/login.html'
})
.when('/Page2',{
  template: 'Youre in page2'
})
.otherwise({
  redirectTo: '/'
});
});
