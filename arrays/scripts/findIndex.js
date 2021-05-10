let nomes = ['maria', 'joão', 'luiza', 'ana', 'clara', 'paulo'];

//sem arrow function
function acheJoao(element){
	return element == 'joão';
}

let indexJoao = nomes.findIndex(acheJoao);
console.log(indexJoao);

//com arrow function
let indexAna = nomes.findIndex(element => element == 'ana');
console.log(indexAna);