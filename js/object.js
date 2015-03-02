// object JS
var chien = {
	name:'Benji',
	parle: function(){
		alert('woof, woof !');
	},
	nourriture:{
		liquide : 'eau',
		solide : 'coquettes'
	},
	sayName: function(){
		return this.name;
	}
};

console.log(chien.nourriture.solide);
// console.log(chien.parle);
chien.sayName();
// chien.parle();
console.log(chien.constructor);