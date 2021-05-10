let jogadoras = [
	
	{nome: 'Natalia', nivel: 3},
	{nome: 'Léia', nivel: 3},
	{nome: 'Aline', nivel: 3},
	{nome: 'Fernanda', nivel: 4},
	{nome: 'Bruna', nivel: 3},
	{nome: 'Sandra', nivel: 2}

]

//com arrow function
jogadoras.forEach((item, indice) => {
	console.log(`posição: ${indice + 1}, nome: ${item.nome}`);
})

// +1  para poder inicializar no 1


//sem arrow function
jogadoras.forEach(function(item, indice){
	console.log(`posição: ${indice + 1}, nome: ${item.nome}`);
})

