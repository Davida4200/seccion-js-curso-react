import {getHeroById} from "./bases/imp-exp";

// const promesa = new Promise( (resolve, reject) => {
//   setTimeout(() => {
//     //Tarea
//     const heroeObtenido = getHeroById(2);
//     resolve( heroeObtenido );
//   }, 2000 );
// });

// promesa.then( ( heroeRecibido ) => {
//   console.log(`Héroe ${ heroeRecibido }`);
// } )
// .catch( err => console.warn( err ) );

const getHeroByIdAsync = (id) => {

  return new Promise( (resolve, reject) => {
    setTimeout(() => {
      //Tarea
      const heroeObtenido = getHeroById( id );
      if ( heroeObtenido ){
        resolve ( heroeObtenido );
      } else {
        reject( 'No se pudo encontrar el héroe' );
      }
    }, 2000 )

  });

}

// getHeroByIdAsync(4)
//   .then( (heroe) => console.log('Heroe', heroe))
//   .catch( (err) => console.warn( err ))

getHeroByIdAsync(4)
  .then( console.log )
  .catch( console.warn )