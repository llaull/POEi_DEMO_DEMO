window.addEventListener('load',	init); 

var canvas, context;

var CW, CH;

var x = 0;
var j = 0;

function init(){
	console.log('init loaded');

	canvas = document.getElementById("canvasor");

	//initialisation du canvas 3d possible
	context = canvas.getContext("2d"); 

	//remplissabe
	context.fillStyle = "#0077ff";

	//trait
	context.lineWidth = 1;

	CW = canvas.height;
	CH = canvas.width;

	//damier();
	action();

	goRond();
	//appel l'animation pourrri
	//setInterval("b()", 20);
}

//affiche un riticule
function action(){
	myLine(0, CH/2, CW, CH/2, "#E52325");
	myLine(CW/2 ,0, CW/2, CH, "#E52325");
}

function goRect(){

	console.log('goRect');
	context.fillStyle = "#0077ff";

	var larg = 200;
	var haut = 100;

	myRect(CW/2-(larg/2), CH/2-(haut/2), larg, haut);
}


function goRond(){

	//demi cercle
	myArc(CW/2, CH/2, 150, 0, Math.PI*2, true,"#0077ff");

	context.translate(CW/2,CH/2);

	setInterval("bl()", 100);


}

function bl(){
	// if (i < 8) { i++; } else { i = 0;}
j++;

	var r = Math.floor(Math.random() * 255);
	var v = Math.floor(Math.random() * 255);
	var b = Math.floor(Math.random() * 255);
	// color = rgb("+r+","+v+","+b+");
	color = "rgb("+r+","+v+","+b+")";


//	for (var i = 0; i < j; i++) {
		// if (j < 8) {
			context.rotate(Math.PI*2 / (j));
			myArc(0, 50, 10, Math.PI*2, 0,  false, color);
		// }
//	}
}

//animation pourri
function b(){
x++;

	myLine(0-x, CH, CW, 0+x, "#FEE529");
	myLine(0-x, CH, CW, 0+x, "#000000");
	myLine(0-x, CH, CW, 0+x, "#000000");
	myLine(0-x, 0+x, CW, CH, "#2EB7ED");
	myLine(0-x, 0+x, CW, CH, "#000000");
	myLine(0-x, 0+x, CW, CH, "#000000");
	
}

//affiche a damier 
function damier(){

	myLine(0, CH/2, CW, CH/2, "#E52325");
	myLine(CW/2 ,0, CW/2, CH, "#E52325");

	var step = 100;
	var nbRepeat = CH/step;

	//dessine les lignes verticale
	for (var i = 0; i<nbRepeat; i++) {
		myLine(0, 0+step*i, CW, 0+step*i, "#2EB7ED");
	}

	var step = 50;
	var nbRepeat = CW/step;

	//dessine les lignes horizontal
	for (var i = 0; i<nbRepeat; i++) {
		myLine(0+step*i, 0, 0+step*i, CW,  "#FEE529");
	}
	
}
