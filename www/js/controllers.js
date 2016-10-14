angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  $scope.exitApp = function() {
    ionic.Platform.exitApp(); // stops the app
    window.close();
  };
  
})

.controller('MainCtrl', function($scope, $ionicModal, $timeout, $http) {
  if(ionic.Platform.isAndroid()){
    $scope.serviceUrl = 'file:///android_asset/www/';
  } else {
    $scope.serviceUrl = '../';
  }
  $http.get($scope.serviceUrl+"PolycookData/allRecipes.json")
    .success(function(response) {
        $scope.recipes = response.recipes;
    });
})

.controller('RecipeCtrl', function($scope, $http, $location, $filter, $stateParams, $ionicPopup) {
  if(ionic.Platform.isAndroid()){
    $scope.serviceUrl = 'file:///android_asset/www/';
  } else {
    $scope.serviceUrl = '../';
  }
  $http.get($scope.serviceUrl+"PolycookData/allRecipes.json")
    .success(function(response) {
        $scope.recipes = response.recipes;
        $scope.rId = $stateParams.recipeId;
        $scope.selected_item = $filter('filter')($scope.recipes, function (d) {return d.id === $scope.rId;})[0];
  });
  $scope.go = function ( path ) {
    $location.path( path + $scope.selected_item.id);
  };
})

.controller('IngredientsCtrl', function($scope, $http, $filter, $stateParams) {
  if(ionic.Platform.isAndroid()){
    $scope.serviceUrl = 'file:///android_asset/www/';
  } else {
    $scope.serviceUrl = '../';
  }
  $http.get($scope.serviceUrl+"PolycookData/allRecipes.json")
    .success(function(response) {
        $scope.recipes = response.recipes;
        $scope.rId = $stateParams.recipeId;
        $scope.selected_item = $filter('filter')($scope.recipes, function (d) {return d.id === $scope.rId;})[0];
    });
})


.controller('RecipeStepsCtrl', function($scope, $http, $filter, $stateParams) {
  if(ionic.Platform.isAndroid()){
    $scope.serviceUrl = 'file:///android_asset/www/';
  } else {
    $scope.serviceUrl = '../';
  }
  $http.get($scope.serviceUrl+"PolycookData/allRecipes.json")
    .success(function(response) {
        $scope.recipes = response.recipes;
        $scope.rId = $stateParams.recipeId;
        $scope.selected_item = $filter('filter')($scope.recipes, function (d) {return d.id === $scope.rId;})[0];
        console.log($scope.serviceUrl+"PolycookData/Recipes/"+ $scope.selected_item.steps_file);
        $http.get($scope.serviceUrl+"PolycookData/Recipes/"+ $scope.selected_item.steps_file)
          .success(function(response) {
            $scope.steps=response.steps;
        });   
    });
})

.controller('CommentsCtrl', function($scope, $http, $filter, $stateParams) {
  if(ionic.Platform.isAndroid()){
    $scope.serviceUrl = 'file:///android_asset/www/';
  } else {
    $scope.serviceUrl = '../';
  }
  $http.get($scope.serviceUrl+"PolycookData/comments.json")
    .success(function(response) {
        $scope.recipes = response.recipe_comments;
        $scope.rId = $stateParams.recipeId;
        $scope.selected_item = $filter('filter')($scope.recipes, function (d) {return d.id === $scope.rId;})[0];
        $scope.comments = $scope.selected_item.comments; 
    });
})

.controller('RecipePicturesCtrl', function($scope, $http, $filter, $stateParams) {
    if(ionic.Platform.isAndroid()){
    $scope.serviceUrl = 'file:///android_asset/www/';
  } else {
    $scope.serviceUrl = '../';
  }
  $http.get($scope.serviceUrl+"PolycookData/allRecipes.json")
    .success(function(response) {
        $scope.recipes = response.recipes;
        $scope.rId = $stateParams.recipeId;
        $scope.selected_item = $filter('filter')($scope.recipes, function (d) {return d.id === $scope.rId;})[0];
        $scope.recipe_images= $scope.selected_item.recipe_images; 
    });
})

;
