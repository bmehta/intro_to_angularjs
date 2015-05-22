angular.module('myApp', ['ui.router'])
.config(function($stateProvider){
	$stateProvider
	.state('recipe1',{
		url:'/recipe1',
		templateUrl:'views/partial-recipe1.html',
		controller:'RecipeController1'
	})
	.state('recipe2',{		
		url:'/recipe2',
		templateUrl:'views/partial-recipe2.html',
		controller:'RecipeController2'
	})
})
.controller('RecipeController1',function($scope){
		$scope.recipeName = 'Carrot Cake'
		$scope.ingredients = ['Carrot','Sugar','Butter','Flour'];
})
.controller('RecipeController2',function($scope){
		$scope.recipeName = 'Strawberry Cake'
		$scope.ingredients = ['Strawberries','Sugar','Butter','Flour'];
})