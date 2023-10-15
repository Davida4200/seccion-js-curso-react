const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [ , , p2 ] = personajes;

console.log( p2 );

const retornaArreglo = () => {
  return ['ABC', 123];
}

const [ letras, numeros ] = retornaArreglo();

console.log( letras, numeros);

//Tarea
const usoEstado = ( valor ) => {
  return [ valor, ( prain ) => { console.log(`Hola, ${prain}!`) } ];
}

const [ nombre, setNombre ] = usoEstado( 'Goku' );


console.log(nombre);

setNombre('Juan');