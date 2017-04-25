angular.module('myApp.view2',[]);

angular.module('myApp.view2')
.component('viewTwo', {
          template: 'view2/view2.html',
          bindings: {

          },
          controller: function() {
               console.log(this) // -> World
               console.log('heyyy');
          }
     });

// 'use strict';
//
// angular.module('myApp.view2', ['ngRoute'])
//
// .config(['$routeProvider', function($routeProvider) {
//   $routeProvider.when('/view2', {
//     templateUrl: 'view2/view2.html',
//     controller: 'View2Ctrl'
//   });
// }])
//
//
// .controller('View2Ctrl', [function() {
//
// }]);
//
//
//
