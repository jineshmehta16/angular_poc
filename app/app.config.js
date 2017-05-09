angular.module('myApp')
.config(($locationProvider, $stateProvider, $urlRouterProvider) => {
    "ngInject";

    // Define our app routing, we will keep our layout inside the app component
    // The layout route will be abstract and it will hold all of our app views
    $stateProvider
        .state('view1', {
            url: '/view1',
            templateUrl: '../view1/view1.html'
        })

        // Dashboard page to contain our goats list page

        .state('view2', {
            url: '/view2',
            templateUrl: '../view2/view2.html'
        })

    $urlRouterProvider.otherwise('/view1');
});

//
// .config(['$routeProvider', function($routeProvider) {
//   $routeProvider.when('/view1', {
//     templateUrl: 'view1/view1.html'
//   });
//
//   $routeProvider.when('/view2', {
//       templateUrl: 'view2/view2.html'
//     });
// }]);
