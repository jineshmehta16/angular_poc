angular.module('myApp')
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html'
  });

  $routeProvider.when('/view2', {
      templateUrl: 'view2/view2.html'
    });
}]);
