let numeros = [5,4,6,8,14,2,1,20];

// desse jeito retorna [1,14,2,20,...]
//pois se útiliza o unicode para ordenação

const ordem = numeros.sort();
console.log(ordem);

//para fazer a ordenação do jeito certo

function comparar(a,b){
	return a - b;
}

const ordenados = numeros.sort(comparar);
console.log(ordenados);