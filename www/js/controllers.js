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


.controller('NewRecipeCtrl', function($scope, $http, Camera, $compile) {

  $scope.options = {
    loop: false,
    //effect: 'fade',
    speed: 500,
  }

  $scope.$on("$ionicSlides.sliderInitialized", function(event, data){
    // data.slider is the instance of Swiper
    $scope.slider = data.slider;
  });

  $scope.$on("$ionicSlides.slideChangeStart", function(event, data){
    console.log('Slide change is beginning');
  });

  $scope.$on("$ionicSlides.slideChangeEnd", function(event, data){
    // note: the indexes are 0-based
    $scope.activeIndex = data.activeIndex;
    $scope.previousIndex = data.previousIndex;
  });

  $scope.takePicture = function (options) {
  
      var options = {
         quality : 75,
         targetWidth: 200,
         targetHeight: 200,
         sourceType: 1
      };

      Camera.getPicture(options).then(function(imageData) {
        $scope.img_src = imageData;
      }, function(err) {
        console.log(err);
      });
    
   };

  $scope.getPicture = function (options) {

    var options = {
       quality : 75,
       targetWidth: 200,
       targetHeight: 200,
       sourceType: 0
    };

    Camera.getPicture(options).then(function(imageData) {
        $scope.img_src = imageData;
    }, function(err) {
       console.log(err);
    });
  };

  $scope.countIngredients=3;
  $scope.countSteps=3;



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

        $scope.options = {
          loop: false,
          effect: 'fade',
          speed: 500,
        }

        $scope.$on("$ionicSlides.sliderInitialized", function(event, data){
          // data.slider is the instance of Swiper
          $scope.slider = data.slider;
        });

        $scope.$on("$ionicSlides.slideChangeStart", function(event, data){
          console.log('Slide change is beginning');
        });

        $scope.$on("$ionicSlides.slideChangeEnd", function(event, data){
          // note: the indexes are 0-based
          $scope.activeIndex = data.activeIndex;
          $scope.previousIndex = data.previousIndex;
        });
    });
})

;
