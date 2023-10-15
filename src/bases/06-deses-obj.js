// const getData = ( objeto ) => {
//   const name = objeto.nombre;
//   return name;
// }

// console.log( getData(persona, 'nombre') );

const persona = {
  nombre: 'Tony',
  edad: 45,
  apellido: 'Stark',
  clave: 'Iron-Man'
}

const getContext = ( { nombre, clave, edad, apellido, rango = 'Capitán' } ) => ({
  nombreClave: clave,
  anios: edad,
  latlng: {
    lat: 14.1234,
    lng: -24.673
  }
})

const { nombreClave, anios, latlng } =  getContext( persona );

//Inicialización desestructurante
const { lat, lng } = latlng;


console.log(nombreClave, anios, lat, lng);