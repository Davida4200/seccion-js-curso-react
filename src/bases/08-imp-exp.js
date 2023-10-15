// import { heroes } from './data/heroes';
//Exportación por defecto y exportación normal:
// import heroes, { owners } from "./data/heroes";
import heroes, { owners } from "../data/heroes";

//console.log(owners);

export const getHeroById = ( id ) => {
  return heroes.find( (hero) => hero.id === id);
}


//console.log( getHeroById(3) );

// const getHeroesByOwner =  ( owner ) => heroes.find( (hero) => hero.owner === owner);
export const getHeroesByOwner =  ( owner ) => heroes.filter( (hero) => hero.owner.length === owner.length);

//console.log( getHeroesByOwner('Marvel') );

