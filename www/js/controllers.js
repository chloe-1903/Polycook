angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  $scope.exitApp = function() {
    ionic.Platform.exitApp(); // stops the app
    window.close();
  };
  
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
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

.controller('IngredientsCtrl', function($scope, $http, $filter, $stateParams, $ionicPopup) {
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

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
