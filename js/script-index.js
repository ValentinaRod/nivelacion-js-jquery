$(document).ready( function(){


//1 etapa
//Ocultar la flecha cuando se muestre.
	$(".flecha").hide() //oculto mediante clase. 
		console.log("me han ocultado");

;

//Dentro de la funcion asignar "nuevas recetas" al parrafo
function printNews(e){
	$(".agregaRecetas").append('<strong>nuevas recetas</strong>');
};
 printNews();

 /*-------------------------------------------------*/

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);

});


/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	for (var i= 0;i<recipesArray.length; i++){
		if (highlighted == true) {
			return(renderRecipe(recipesArray));
			console.log('Recipes: ', recipesArray);
		} else {
		console.log("no se cumple la condicion");
	}
}
}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	console.log('Voy a pintar la receta: ', recipe);
}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}

  
