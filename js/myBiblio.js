console.log('biblio charger');

//creation de ligne
function myLine(fromX, fromY, toX, toY, Color){

	context.strokeStyle = Color;

	context.beginPath();

	context.moveTo(fromX, fromY);

	context.lineTo(toX, toY);

	context.closePath();

	context.stroke();

}

// creation d'un rectangle
function myRect(x,y,largeur,hauteur){

	context.beginPath();

	context.rect(x,y,largeur,hauteur);

	context.closePath();

	context.stroke();
}

/**
 * creation d'un arc de cercle
 * @param  {[type]} centerX      [description]
 * @param  {[type]} centerY      [description]
 * @param  {[type]} radio        [description]
 * @param  {[type]} angleDepart  [description]
 * @param  {[type]} angleArrivee [description]
 * @param  {[type]} clock        [description]
 * @param  {[type]} color        change la couleur de fond de l'arc
 * @return {[type]}              [description]
 */
function myArc(centerX,centerY,radio,angleDepart,angleArrivee, clock, color){

	context.beginPath();

	context.fillStyle = color;

	context.arc(centerX,centerY,radio,angleDepart,angleArrivee, clock);

	context.closePath();

	context.fill();
}