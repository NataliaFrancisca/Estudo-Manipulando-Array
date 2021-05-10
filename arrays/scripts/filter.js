const musicas = [
	
	{nome: 'Fogo', artista: 'Baiana System'},
	{nome: 'She´s my Religin', artista: 'Pale Waves'},
	{nome: 'Skin', artista: 'Sabrina Carpenter'},
	{nome: 'Criado Mudo', artista: 'Baiana System'},

]


//Com arraw function
let isBaianaSystemArrow = musicas.filter(p => p.artista == 'Baiana System');
console.log(isBaianaSystemArrow);

//Sem arrow function
let isBaianaSystem = musicas.map(function(p){

	if(p.artista == 'Baiana System'){
		return p;
	}
})

console.log(isBaianaSystem);
//Retorna todos os elementos, os que não encaixam no que é pedido, retorna como undefined


