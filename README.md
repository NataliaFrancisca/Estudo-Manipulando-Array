## 🔖 Manipulando Array: 

- [X] map 
- [X] forEach
- [X] filter
- [X] find
- [X] some
- [X] every
- [X] findIndex 
- [X] includes
- [X] join
- [X] pop
- [X] push
- [X] sort
- [X] shift
- [X] slice

--- 

### map

Retorna um array com os elementos novos de acordo com o que foi pedido  

```javascript
	//multiplicar todos os números por 2
	
	let numeros = [2,3,4,5,6,7];
	let multiplica = numeros.map(p => p * 2 ); 
```

### filter

Retorna um array com os elementos que se encaixam no que foi pedido  

```javascript
	//retornar só as músicas que são do BaianaSystem
	
	const musicas = [
		{nome: 'Fogo', artista: 'BaianaSystem'},
		{nome: 'She´s my Religin', artista: 'Pale Waves'},
		{nome: 'Skin', artista: 'Sabrina Carpenter'},
		{nome: 'Criado Mudo', artista: 'BaianaSystem'}
	]
	
	let isBaianaSystem = musicas.filter(p => p.artista == 'BaianaSystem');
	//[{nome: 'Fogo', artista: 'BaianaSystem'},{nome: 'Criado Mudo', artista: 'BaianaSystem'}]
```

### forEach

Vai percorrer o array todo, ele é parecido com o `for`

```javascript
	const numeros = [2,5,6,14,2,3];
	
	numeros.forEach((item, indice) => {
		console.log(item);
	})

```

### find

Vai retornar o primeiro elemento que se encaixa no que foi pedido  

```javascript
	//número maior que 10
	
	const numeros = [2,5,6,14,2,3];
	const maiorQueDez = numeros.find(element => element > 10); //14

```

### some

Retorna true ou false para o teste que é passado. Pelo menos um elemento tem que passar no teste para poder retornar true.

```javascript
	//números menores que 5
	
	const numeros = [2,4,5,66];
	const menorQueCinco = valores.some(item => item < 5); //true
```

### every

Retorna true ou false, mas para retornar um deles, todos os elementos precisam passar pelo teste

```javascript
	// nenhum dos elementos é maior que 50, então retorna false;
	// todos os elementos são menores que 100, então retorna true;
	
	const numeros = [10,20,30,40,50];
	
	const maioresCinquenta = numeros.every(item => item > 50); //false
	
	const menoresCem = numeros.every(item => item < 100); //true
```

### *some x every*

	O some retorna true ou false caso um dos elementos atenda o teste. 
	Já o every, eu preciso que todos os elementos atendam a esse teste, tanto para ser true ou false.


### findIndex

Retorna o index do elemento dentro de um array.  
EX: [2,4,1,3,9] -> caso eu queira achar o indice do elemento 9, ele retorna o número 4
	[0,1,2,3,4]

### includes

Retorna true ou false, caso o array tenha o elemento que foi passado.
Ex: [10,20,30] -> caso no teste eu pergunte se tem um elemento 10, ele retorna true.
caso eu pergunte se tem um elemento 5, ele retorna false.

### join

junta os elementos de um array, e depois pode separar eles com o que se passa por parametro
EX: [1,9,2000] -> se eu usar o ('/') ele vai retornar os números separados pela barra invertida
1/9/2000

### pop

vai remover o último elemento de um array e retornar ele.

### push

adiciona elementos ao array 

### sort

retorna um array com os elementos ordenados, mas é preciso passar uma função para fazer um ordenação certa. Pois ele utiliza o sistema unicode para ordenar.

### shift

vai remover o primeiro elemento de um array e retornar ele.

### slice

vai retornar um subarray com os elementos do array, depende de onde se inicia e termina.
EX: [2,5,6,3] -> slice(0,2) -> vai retornar um array com os elementos [2,5];  
	[0,1,2,3]