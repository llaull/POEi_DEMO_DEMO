window.addEventListener('load',	init); 

var canvas, context;

var CW, CH;

var x = 0;

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

	action();
setInterval("b()", 20);
}

function action(){
	myLine(0, CH/2, CW, CH/2, "#E52325");
	myLine(CW/2 ,0, CW/2, CH, "#E52325");
}


function b(){
x++;

	myLine(0-x, CH, CW, 0+x, "#FEE529");
	myLine(0-x, CH, CW, 0+x, "#000000");
	myLine(0-x, 0+x, CW, CH, "#2EB7ED");
	myLine(0-x, 0+x, CW, CH, "#000000");
	
}


function myLine(fromX, fromY, toX, toY, Color){

	context.strokeStyle = Color;

	context.beginPath();

	context.moveTo(fromX, fromY);

	context.lineTo(toX, toY);

	context.closePath();

	context.stroke();

}

