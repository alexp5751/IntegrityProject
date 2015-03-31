var integrityProjectApp = angular.module('integrityProjectApp', [
	'ngRoute',
	'integrityProjectControllers'
]);

integrityProjectApp.config(
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'html/home.html',
        controller: 'HomeCtrl'
      }).
      when('/registration', {
        templateUrl: 'html/registration.html',
        controller: 'RegistrationCtrl'
      }).
      when('/center_locations', {
        templateUrl: 'html/centerlocations.html',
        controller: 'CenterLocationsCtrl'
      }).
      when('/course_info', {
        templateUrl: 'html/courseinfo.html',
        controller: 'CourseInfoCtrl'
      }).
      when('/calendar', {
        templateUrl: 'html/calendar.html',
        controller: 'CalendarCtrl'
      }).
      when('/franchising_information', {
        templateUrl: 'html/franchisinginformation.html',
        controller: 'FranchisingInformationCtrl'
      }).
      when('/alternative_sentencing', {
        templateUrl: 'html/alternativesentencing.html',
        controller: 'AlternativeSentencingCtrl'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }
);