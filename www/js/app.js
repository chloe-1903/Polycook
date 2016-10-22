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


//Directive that returns an element which adds buttons on click which show an alert on click
.directive("addingredientsbutton", function(){
  return {
    restrict: "E",
    template: "<button addingredients class='button button-balanced ion-plus-round  col-offset-80'/>"
  }
})

//Directive for adding buttons on click that show an alert on click
.directive("addingredients", function($compile){
  return function(scope, element, attrs){
    element.bind("click", function(){
      scope.countIngredients++;
       var txt= "<label class='item item-input item-stacked-label'> <span class='input-label'>"+scope.countIngredients+"eme ingrédient:</span><input type='text'></label>";
      angular.element(document.getElementById('other_ingredients')).append($compile(txt)(scope));
    });
  };
})

//Directive that returns an element which adds buttons on click which show an alert on click
.directive("addstepsbutton", function(){
  return {
    restrict: "E",
    template: "<button addsteps class='button button-balanced ion-plus-round  col-offset-80'/>"
  }
})

//Directive for adding buttons on click that show an alert on click
.directive("addsteps", function($compile){
  return function(scope, element, attrs){
    element.bind("click", function(){
      scope.countSteps++;
       var txt= "<label class='item item-input item-stacked-label'> <span class='input-label'> Etape "+scope.countSteps+" : </span><input type='text'></label>";
      angular.element(document.getElementById('new_recipe_steps')).append($compile(txt)(scope));
    });
  };
})

.factory('Camera', function($q) {

   return {
      getPicture: function(options) {
         var q = $q.defer();

         navigator.camera.getPicture(function(result) {
            q.resolve(result);
            return result;
         }, function(err) {
            q.reject(err);
         }, options);

         return q.promise;
      }
   }

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
        templateUrl: 'templates/search.html',
        controller: 'SearchCtrl'
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

    .state('app.newRecipe', {
      url: '/newRecipe',
      views: {
        'menuContent': {
          templateUrl: 'templates/newRecipe.html',
          controller: 'NewRecipeCtrl'
        }
      }
    })

    .state('app.newRecipe2', {
      url: '/newRecipe2',
      views: {
        'menuContent': {
          templateUrl: 'templates/newRecipe2.html',
          controller: 'NewRecipeCtrl'
        }
      }
    })

    .state('app.newRecipe3', {
      url: '/newRecipe3',
      views: {
        'menuContent': {
          templateUrl: 'templates/newRecipe3.html',
          controller: 'NewRecipeCtrl'
        }
      }
    })

    .state('app.newRecipe4', {
      url: '/newRecipe4',
      views: {
        'menuContent': {
          templateUrl: 'templates/newRecipe4.html',
          controller: 'NewRecipeCtrl'
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
