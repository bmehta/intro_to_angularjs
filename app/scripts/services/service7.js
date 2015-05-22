angular.module('myAppService',[])
.factory('recipeService',function(){				
		var recipeList = ["Fruit Tart", "Ice Cream", "Froyo","Sweet crepes","Donuts"];
		return {recipeNames: recipeList};
})