window.addEventListener('load',	init); 
// ou
// window.onload = init;
// window = haut niveau JS

var form, login, pwd, taille, paiement, comments;
var ingredients = new Array();
var style = []; //array aussi

function init(){
	
	// alert('hello !'); //debug fenetre
	console.log('hello init'); //debug console

	document.getElementById("go").addEventListener('click', affiche); //go = id du btn

	// form = document.getElementById("MyForm");
	form = document.forms["MyForm"];
	// form = document.forms[0];

	console.log('formulaire == ' + form );

	login = form.elements["login"];
	pwd = form.elements["pwd"];
	taille = form.elements["taille"];
	r = form.elements["r[]"];
	ingredients = form.elements["ingredients[]"];
	paiement = form.elements["paiement"];
	style = form.elements["style"];
// affiche();

};

function affiche(){

	console.log(login.value);

	var txt = "";

	for (var i = 0; i < ingredients.length; i++) {
		
		if (ingredients[i].checked) { 

			txt += ingredients[i].value + " ";

		}
	}

	console.log(txt);

	console.log( "paiement" + paiement.options[paiement.selectedIndex].text);


	var txt2 = "";

	for (var i = 0; i < style.options.length; i++) {
		
		option = style.options[i];
		if (option.selected) { 

			txt2 += option.value + " " + option.text;

		}
	}

	console.log(txt2);
}