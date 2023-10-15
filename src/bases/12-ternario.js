

const activo = 'Manzana';
// let mensaje = '';

// if (!activo){ 
//   mensaje = 'Activo';
// } else {
//   mensaje = 'Inactivo';
// }

// const mensaje = ( !activo ) ? 'Activo' : 'Inactivo';

const mensaje = activo && 'Pera'

console.log(mensaje);


//
let a = true;
let b = false;

//El operador AND evalua de izq a dcha. Si el p es true,
// sigue evaluando el siguiente y devuelve el boolean de q
const mesajito = a && b;

console.log(mesajito);
