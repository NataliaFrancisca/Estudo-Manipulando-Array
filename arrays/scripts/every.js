let numeros = [10,20,30,40,50];

function maiorQue(element){
	return element > 5;
}

//retorna true pois todos os elementos são maior que 5
let verdadeiro = numeros.every(maiorQue);
console.log(verdadeiro);


//retorna false pois os elementos não são maior que 50
let falso = numeros.every(item => item > 50);
console.log(falso);