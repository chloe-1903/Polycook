// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

    .state('app.main', {
      url: '/main',
      views: {
        'menuContent': {
          templateUrl: 'templates/main.html',
          controller: 'MainCtrl'
        }
      }
    })

    .state('app.recipes', {
      url: '/recipes/',
      views: {
        'menuContent': {
          templateUrl: 'templates/main.html',
          controller: 'MainCtrl'
        }
      }
    })

    .state('app.recipe', {
      url: '/recipes/:recipeId',
      views: {
        'menuContent': {
          templateUrl: 'templates/recipe.html',
          controller: 'RecipeCtrl'
        }
      }
    })

    .state('app.recipeSteps', {
      url: '/recipeSteps/:recipeId',
      views: {
        'menuContent': {
          templateUrl: 'templates/recipeSteps.html',
          controller: 'RecipeStepsCtrl'
        }
      }
    })

    .state('app.comments', {
      url: '/comments/:recipeId',
      views: {
        'menuContent': {
          templateUrl: 'templates/comments.html',
          controller: 'CommentsCtrl'
        }
      }
    })


    .state('app.recipePictures', {
      url: '/recipePictures/:recipeId',
      views: {
        'menuContent': {
          templateUrl: 'templates/recipePictures.html',
          controller: 'RecipePicturesCtrl'
        }
      }
    })


    .state('app.ingredients', {
      url: '/ingredients/:recipeId',
      views: {
        'menuContent': {
          templateUrl: 'templates/ingredients.html',
          controller: 'IngredientsCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/main');
});
