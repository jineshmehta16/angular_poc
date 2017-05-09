'use strict';

angular.module('view-one',[]);


angular.module('view-one')
.component('viewOne', {
          templateUrl: 'view1/viewOne.html',
          bindings: {
            hero: '='
          },
          controller: function abc() {
               // You can access the bindings here or inside your views

               this.hero = {
                    name: 'jaxo'
                  };

               console.log('jinesh');
               console.log(this);
          }
     });

// 'use strict';
//
// angular.module('myApp.view1', ['ngRoute'])
//
// .config(['$routeProvider', function($routeProvider) {
//   $routeProvider.when('/view1', {
//     templateUrl: 'view1/view1.html',
//     controller: 'View1Ctrl'
//   });
// }])
//
// .controller('View1Ctrl', [function() {
//
// }]);
