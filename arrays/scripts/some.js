let valores = [80,25,36,100,120,250];

//com arrow function
let maiorQueCem = valores.some(item => item > 100);
console.log(maiorQueCem);

//sem arrow function
function testeMaior(element, index){
	return element > 300;
}

let maiorQueTrezentos = valores.some(testeMaior);
console.log(maiorQueTrezentos);
