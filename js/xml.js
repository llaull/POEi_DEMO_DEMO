// note :
// tableaux -> http://www.w3schools.com/dom/dom_nodetype.asp
// 
window.addEventListener('load',	init); 

function init(){
	console.log('init ok');

	loadFichierXml();
}

var path = "/galeries/";
var catArray = ["art_abstrait", "villes","paysages_deserts"]

function loadFichierXml(){

	console.log('fichier xml');

	xhr = new XMLHttpRequest();
	console.log(xhr);

	xhr.open("POST", "data/galeries_images.xml", true);

	xhr.send();

	xhr.onreadystatechange = function(){ //appeler a chaque changement de readystate

		if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {

			var data = xhr.responseXML; //pour xml
			// document.getElementById("result").innerHTML = "->" + data;
			console.log(data);

			var nodes = data.getElementsByTagName("image");

			//clear
			document.getElementById("result").innerHTML = "";			

			//boucle praser
			for (var i = 0; i < nodes.length; i++) {

				var attributs = nodes[i].attributes;
				// var attId = nodes[0].value;
				var attId = attributs.getNamedItem("id_image").value;
				var attCategorie = attributs.getNamedItem("categorie").value;

				var fichier = nodes[i].getElementsByTagName('fichier')[0].firstChild.nodeValue;
				var legende = nodes[i].getElementsByTagName('legende')[0].firstChild.nodeValue;

				document.getElementById('result').innerHTML += fichier + " " + legende + " " + attId + " " + attCategorie + "</br></br>";

				// var src = path + catArray[attCategorie] + "/" + fichier;

				// console.log(src);


				
			}


		}
		
	};
}