angular.module('myApp',[])
.controller('MyRecipeController5',function($scope, $http){		
		$scope.caption="My Tasty Recipes";	
		
		var url='http://localhost:8000/app/recipes.json';	
		$http.get(url)
			.success(function(response){				
				$scope.recipeNames = response.recipeNames;
			})
			.error(function(){
				alert('Error encountered');
			});
})