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

```javascript
	const nomes = ['maria', 'joão', 'luiza', 'ana', 'clara', 'paulo'];
	
	const indexAna = nomes.findIndex(element => element == 'ana'); //3
	
```

### includes

Retorna true ou false caso o array tenha o elemento que foi passado.

```javascript
	const notas = [6,5,8,8,10,9];
	
	const notaDez = notas.includes(10); //true
	
```
### join

Junta os elementos de um array e depois pode separar eles com o que se passa por parametro.

```javascript
	const nascimento = [9,1,2000];
	const email = ['meuemail','@","gmail.com'];
	
	const dataNascimento = nascimento.join('/'); // 9/1/2000
	const meuEmail = email.join(''); //meuemail@gmail.com
	
```
### pop

Vai remover o último elemento de um array e retornar ele.

```javascript

	const nomes = ['Maria', 'João', 'Luiza', 'Clara', 'José'];
	const chegouPorUltimo = nomes.pop(); //José
	
	console.log(nomes) // ['Maria', 'João', 'Luiza', 'Clara'];
	
```

### push

Adiciona elementos ao array 

```javascript

	const frutas = ['Banana', 'Maça', 'Laranja', 'Manga'];
	frutas.push('Morango');
	
	console.log(frutas) // ['Banana', 'Maça', 'Laranja', 'Manga', 'Morango'];
	
```

### sort

Retorna um array com os elementos ordenados, mas é preciso passar uma função para fazer um ordenação certa. Pois ele utiliza o sistema unicode para ordenar.

```javascript

	const numeros = [5,4,6,8,14,2,1,20];
	const primeiraOrdenacao = numeros.sort(); // [1, 14, 2, 20, 4, 5, 6, 8]
	
		function comparar(a,b){
			return a - b;
		}

	const segundaOrdenacao = numeros.sort(comparar); // [1, 2, 4, 5, 6, 8, 14, 20]
```


### shift

Vai remover o primeiro elemento de um array e retornar ele.

```javascript

	const frutas = ['Banana', 'Maça', 'Laranja', 'Manga'];
	const primeiraFruta = frutas.shift(); // Banana
	
	console.log(frutas) // ['Maça', 'Laranja', 'Manga'];
	
```

### slice

Vai retornar um subarray com os elementos do array, depende de onde se inicia e termina.

```javascript

	const numeros = [1,2,3,4,5,6,7];
	
	const doisUtimosNumeros = numeros.slice(-2); // [6,7]
	
	const doisPrimeirosNumeros = numeris.slice(0,1) // [1,2]
	
```
