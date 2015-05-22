angular.module('myApp',[])
.controller('MyRecipeController6',function($scope, $http){		
		$scope.caption="My Tasty Recipes";	
		
		var url='http://localhost:8000/app/recipes.json';
		$scope.favRecipe = "Cookie Cake";
		$http.get(url)
			.success(function(response){				
				$scope.recipeNames = response.recipeNames;
			})
			.error(function(){
				alert('Error encountered');
			});
})