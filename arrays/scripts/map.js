let numeros = [2,3,4,5,6,7];

//com arrow function
let multiplicaArrow = numeros.map(p => p * 2 );
console.log(multiplicaArrow);

//sem arrow function
let multiplica = numeros.map(function(p){
	return p * 2;
})
console.log(multiplica);

