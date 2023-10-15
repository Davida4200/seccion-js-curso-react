
//function debil
// function saludar ( name ){
//   return `Hola, ${ name }!`;
// }

//function robusta
const saludar = function ( name ){
  return `Hola, ${ name }!`;
}

const saludar2 = ( name ) => {
  return `Hola, ${ name }!`;
}

const saludar3 = () => `Hola Vegeta!`;

const getUser = () => ({
  uid: '456',
  username: 'El_Papi1502'
})

const user = getUser();

console.log( saludar( 'Pepe' ) );
console.log( saludar2( 'Rosita' ) );
console.log( saludar3() );
console.log(user);


const getUsuarioActivo = ( nombre ) => ({
  uid: 'ABC567',
  username: nombre
});

const usuarioActivo = getUsuarioActivo('Felipe');
console.log( usuarioActivo );