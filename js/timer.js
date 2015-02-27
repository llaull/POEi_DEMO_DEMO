// note :
// 
window.addEventListener('load',	init); 

var t = null;
var x = "0";
function init(){
	console.log('init ok');

	document.getElementById("go").onclick =  animGo;
	document.getElementById("stop").onclick =  animStop;
	document.getElementById("clear").onclick =  Anim(0);
	
}

function Anim(){
	x++;
	document.getElementById("result").innerHTML = x;
		
}

function animGo(){
	
	if (t == null) t = setInterval("Anim()", 20);
	// if (t == null) t = setInterval((function(){Anim(x);}), 20);
	
		
}

function animStop(){
	if (t != null) {
		clearInterval(t);
		t = null;

	}
		
}