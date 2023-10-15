const nombre = 'John';
const apellido = 'Doe';

//template string
const nombreCompleto = `${nombre} ${apellido} ${1 + 1}`;

console.log(nombreCompleto);

function getSaludo(nombre) {
  return 'Hola ' + nombre;
}

console.log(`Este es un mensaje: ${getSaludo(nombre)}`);