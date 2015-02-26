window.addEventListener('load',	init); 

function init(){
	console.log('init loaded');

	var bouton = document.getElementById("btn");

	bouton.addEventListener('click', phraseMarker);
	// bouton.onclick = phraseMarker;
	
	phraseMarker();
}

function phraseMarker(){
	console.log('phrase demander');

	var sujet =["Bigoudy","Minoutor"];
	var verbe =["mange","fait chier","chasse","veut"];
	var cod =["des souris","la vie","des pizzas","du jonbon"];

	//variables aléatoire
	var randSujet = Math.floor(Math.random() * sujet.length);
	var randVerbe = Math.floor(Math.random() * verbe.length);
	var randCod = Math.floor(Math.random() * cod.length);

	// construction de la phrase
	var phrase = sujet[randSujet] + " " + verbe[randVerbe] + " " + cod[randCod];

	console.log(phrase);

	// variable de confort
	var phraseElement = document.getElementById("result");

	// envoie a la div
	phraseElement.innerHTML = phrase;
}
