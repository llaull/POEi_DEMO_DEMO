window.addEventListener('load',	init); //DOM2 

function init(){
	console.log('init ok');

	loadFichierTxt();
}

function loadFichierTxt(){

	console.log('fichier txt');

	xhr = new XMLHttpRequest(); //Xml Http Request  <--------- AJAX 
	console.log(xhr);

	xhr.open("POST", "data/demo.txt", true);

	xhr.send();

	xhr.onreadystatechange = function(){ //appeler a chaque changement de readystate

		if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {

			var data = xhr.responseText;
			document.getElementById("result").innerHTML = data;

		}
		
	};
}

