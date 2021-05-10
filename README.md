## Manipulando Array: 

- [X] map 
- [X] forEach
- [X] filter
- [X] find
- [X] some
- [X] every
- [X] findIndex
- [ ] includes
- [ ] join
- [ ] pop
- [ ] push
- [ ] sort
- [ ] shift
- [ ] slice

--- 

### map

Retorna um novo array com os elementos novos de acordo com o que foi pedido, 
Ex: multiplicar todos os números por 2

### filter

Retorna um array com os elementos que se encaixam no que foi pedido
Ex: retornar só as músicas que são do Baiana System

### forEach

Vai percorrer pelo array todo, é parecido com o for
Ex: percorrer pelo array todo e imprimir só os nomes dentro de um objeto

### find

Vai retornar o primeiro elemento que se encaixa no que foi pedido
Ex: [2,4,7,12,14,17] -> se eu pedir para retornar somente elementos maior que 10, ele vai retornar o 12,
pois ele é o primeiro que se encaixa no que foi pedido.


### some

Retorna true ou false
Ex: [2,4,5,66] -> se eu perguntar se nesse array tem algum elemento maior que 10, ele vai me retornar true,
mas se eu perguntar se tem algum elemento maior que 66, ele retorna false.

### every

Retorna true ou false, mas para retornar um deles, todos os elementos precisam passar pelo teste
Ex: [4,8,12,16,20] -> se eu passar um teste, onde pergunto se todos os elementos são maior que 10, ele retorna false,
pois nem todos são maior que 10. Caso eu pergunte se todos os elementos são maior que 2, ele retorna true, pois todos se encaixam no teste.

### *some x every*

O some retorna true ou false caso um dos elementos atenda o teste. Já o every, eu preciso que todos os elementos 
atendam a esse teste, tanto para ser true ou false.

### findIndex

Retorna o index do elemento dentro de um array.
EX: [2,4,1,3,9] -> caso eu queira achar o indice do elemento 9, ele retorna o número 4
	[0,1,2,3,4]


