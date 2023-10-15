
const name = 'John';
let lastName = 'Doe';

let valorDado = 5;
valorDado = 4;

console.log(name, lastName, valorDado);

//var no se debe usar
if (true) {
  //scope local
  let valorDado = 67;
  console.log(valorDado);
}

//scope global
console.log(valorDado);