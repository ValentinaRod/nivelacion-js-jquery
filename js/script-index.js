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
	console.log('Recipes: ', recipesArray);
	//for (var i= 0;i<recipesArray.length; i++){
		//if (highlighted == true) {
			//return(renderRecipe(recipesArray));
	    //ETAPA 4 y 5: solo titulos y autores
	    for(var e in recipe){ /*es el de recorrer un objeto pasando por cada una de sus 
	    	propiedades para actuar sobre ellas de alguna manera*/
    	var titulo = recipe["title"];
    	console.log(recipe["title"]);
    	var sou = recipe["source"].name;
    	console.log(recipe["source"].name);
    	var name = recipe["name"];
    
    
		var link= $('<a/>', {
			'class': 'item-recipe'});
		var spancito= $('<span/>',{
			'class': 'attribution'});
		var spantitle= $('<span/>',{
			'class': 'title-recipe'});
		var span1= $('<span/>',{
			'class': 'metadata-recipe'});
		var span2= $('<span/>',{
			'class': 'author-recipe'});
		var span3= $('<span/>',{
			'class': 'bookmarks-recipe'});
    	var span4= $('<span/>',{
    		'class': 'icon-bookmark'});
    	var imagen = $('<img/>',{
    		'src':'img/recipes/320x350/' + name + '.jpg'});

    span3.append(span4);
    span1.append(span3);
    span1.append(span2);
    span2.append(sou);
    spantitle.append(titulo);
    spancito.append(spantitle);
    spancito.append(span1);
    link.append(spancito);
    link.append(link);   
   $('.list-recipes').append(link);
    renderActivities(activitiesArray);
}

if(activitiesArray.length > 0){
		$(".wrapper-message").hide();

			
			//$(".list-recipes").append("<a class='item-recipe' href='#'><span class='attribution'><span class='title-recipe'>" +  e.title + "</span><span class='metadata-recipe'><span class='author-recipe'>" + e.source.name + "</span><span class='bookmarks-recipe'><span class='icon-bookmark'></span> </span></span></span><img src='img/recipes/320x350/"+ $(e).attr("name") +".jpg'></a>");
	/*("<a/>", {
    class: 'item-recipe'     // hijos.
    href :''
}).append($('<span/>',{
    class: 'attribution'

}).append("<span/>", {
    class: 'title-recipe'
    text: 'Titulo de la Receta'
    attr: 'title'
})).hide().appendTo('list-recipes').fadeIn('slow');*/
	 //$("a").append("class='item-recipe' href='#'");
			/*.append('<span class="attribution"</span>')
			$("<span/>" , {
					html : 'Un <strong>Titulo de la receta</strong> ',
    				'class' : 'title-recipe',
    				attr : 'title'
			});
			
			append("<span class='metadata-recipe'></span>")
			
			$("<span/>" , {
					html : '<strong>NOMBRE DEL AUTO DE LA RECETA</strong> ',
    				'class' : 'author-recipe',
    				attr : 'source.name'
			});
			append("<span class='bookmarks-recipe'>")
			append("<span class='icon-bookmark'></span>")
			append("<img src='assets/img/recipes/320x350/spring-fromage-fort.jpg'")*/


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
renderRecipe();


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

  
