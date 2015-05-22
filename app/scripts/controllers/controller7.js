angular.module('myApp',['myAppService'])
.controller('MyRecipeController7',function($scope, recipeService){		
		$scope.caption="My Tasty Recipes";			
		$scope.recipeNames = recipeService.recipeNames;
})