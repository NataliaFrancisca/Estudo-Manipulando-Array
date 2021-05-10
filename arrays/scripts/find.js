let musicas = [
	{musica: 'Na sua estante', artista: 'Pitty', idioma: 'Português'},
	{musica: 'Blask', artista: 'Kacperczyk', idioma: 'Polonês'},
	{musica: 'Elefanti', artista: 'Gomma', idioma: 'Italiano'},
	{musica: 'Dingga', artista: 'MAMAMOO', idioma: 'Coreano'},
	{musica: 'Ta reine', artista: 'Angèle', idioma: 'Francês'}
]

//com arrow function
const musicaCoreana = musicas.find(element => element.idioma == 'Coreano');
console.log(musicaCoreana);

//sem arrow function
const musicaFrancesa = musicas.find(function(element){
	if(element.idioma == 'Francês'){
		return element;
	}
})

console.log(musicaFrancesa);