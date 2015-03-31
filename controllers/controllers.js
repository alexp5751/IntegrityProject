var integrityProjectControllers = angular.module('integrityProjectControllers', []);

integrityProjectControllers.controller('HomeCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    highlightNext('home');
}]);

integrityProjectControllers.controller('RegistrationCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    highlightNext('registration');
}]);

integrityProjectControllers.controller('CenterLocationsCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    highlightNext('center-locations');
}]);

integrityProjectControllers.controller('CourseInfoCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    highlightNext('course-info');
}]);

integrityProjectControllers.controller('CalendarCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    highlightNext('calendar');
}]);

integrityProjectControllers.controller('FranchisingInformationCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    highlightNext('franchising-information');
}]);

integrityProjectControllers.controller('AlternativeSentencingCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    highlightNext('alternative-sentencing');
}]);
function highlightNext(nextClass) {
    var selected = $('.sidebar-nav .sidebar-selected');
    var next = $('.sidebar-nav ' + '.' + nextClass);
    if (selected != next) {
        if (selected != null) {
            selected.removeClass('sidebar-selected');
        }
        next.addClass('sidebar-selected');
    }
}