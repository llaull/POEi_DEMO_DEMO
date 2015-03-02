/*
///INFOS AJAX
-Requète HTTP sans recharger la page
-Utilise essentiellement  le format XML pour le transfert

-Valeurs du readystate
0: request not initialized 
1: server connection established
2: request received 
3: processing request 
4: request finished and response is ready

//http://www.w3schools.com/dom/dom_element.asp
//http://www.w3schools.com/dom/dom_document.asp
//http://www.w3schools.com/dom/dom_attribute.asp
*/

// AIDE AU CONTEXTE
window.onload = init;

function init(){
//Evènements sur les boutons
document.getElementById('bt_1').onclick = loadFichierXml;
}


function loadFichierXml(){
// Le coeur du process : l'objet XMLHttpRequest
var xhr = getXMLHttpRequest();

//open(method,url,async)
//PARAM-> method : get ou post
//PARAM-> url : la location du fichier sur le serveur
//PARAM-> true = asynchrone --- false = synchrone
//DOES->[ouvre le flux]
xhr.open("POST", "galeries_images.xml", true);

//xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");

//xhr.send(param);
//PARAM-> string : uniquement pour post
//DOES->[envoie la requète au serveur]
xhr.send();
//xhr.send(string);

//fonction anonyme;
//DOES->[fonction qui réagit au changement d'état de la requète]
xhr.onreadystatechange = function() {

if(xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {

//La réponse, au format XML
var data = xhr.responseXML;

//getElementsByTagName() retourne une LISTE DE NOEUDS !!! (NodeList) des éléments correspondants et de leurs enfants
var nodes = data.getElementsByTagName("image");
//var nodes = data.getElementsByTagName("fichier");// SPOT A1

// On lit chaque élément 'image' du flux XML.
document.getElementById('output').innerHTML = ""; //clear
for (var i=0; i<nodes.length; i++) {

//attributes ==> retourne un NamedNodeMap d'attributs pour l'élément
var attributs = nodes[i].attributes;
var attId = attributs[0].value;
//var attId = attributs.getNamedItem("id_image").value; //pareil
var attCategorie = attributs[1].value;
//var attCategorie = attributs.getNamedItem("categorie").value //pareil;

var fichier = nodes[i].getElementsByTagName('fichier')[0].firstChild.nodeValue;
var legende = nodes[i].getElementsByTagName('legende')[0].firstChild.nodeValue;

// PARLER DU SGML
//var fichier = nodes[i].childNodes[1].childNodes[0].nodeValue;
//var fichier = nodes[i].childNodes[1].firstChild.nodeValue; // pareil
//var legende = nodes[i].childNodes[3].childNodes[0].nodeValue;

// SI SPOT A1
//var fichier = nodes[i].firstChild.nodeValue;
//var fichier = nodes[i].childNodes[0].nodeValue; // pareil

document.getElementById('output').innerHTML += "fichier == "+fichier + " légende == " +  legende + " id_image == " + attId + " id_categorie == " + attCategorie + "<br /><br />";


// Création d'une string image

// 'Contournement peu élégant' du traitement de la catégorie
// Ce traitement suppose des id categories démarrant à 0 et s'incrémentant de 1, ce qui ne sera surement pas le cas. Ce contournement sert à utiliser confortablement les images (en les voyant)
var path = "/galeries/";
var catArray = ["art_abstrait", "villes", "paysages_deserts"];
var src = path + catArray[attCategorie] + "/"+fichier;
//document.getElementById('output2').innerHTML += "<img src="+src+" />";



// Ajout au DOM
var monImg = new MonImage(path, fichier, catArray[attCategorie] );
console.log(monImg.showInfos());
document.getElementById('output2').appendChild(monImg.createElem());

}

}
};
}

function afficheImage(){
alert("afficheImage()");
alert(event.target);
alert(event.currentTarget);
alert(event.currentTarget.nodeName);
}
function afficheImage2(path, fichier, cat){
alert("afficheImage2()");
alert(path+""+cat+"/"+fichier );
}

function afficheImage3(obj){
alert("afficheImage3()");
alert(obj.path+""+obj.cat+"/"+obj.fichier );
}

function MonImage(ppath, pfichier, pcat) {
var path = ppath;
var fichier = pfichier;
var cat = pcat;
this.showInfos = function() {
return "path == " + path + "fichier == " + fichier + " cat == " + cat;
}

this.createElem = function() {
var chemin = path+cat+"/"+fichier;
var img = document.createElement("IMG");
var att_src = document.createAttribute("src");
att_src.value = chemin;
img.setAttributeNode(att_src);

img.addEventListener("click", function(){afficheImage2(path, fichier, cat);});

return img;
}
}
