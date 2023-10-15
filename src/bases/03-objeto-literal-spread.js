const persona = {
  nombre: 'Ichigo',
  apellido: 'Kurosaki',
  edad: 17,
  direccion: {
    ciudad: 'New York',
    zip: 23442019,
    lat: 32.4215,
    lng: 39.1422,
  }
}

const animal = {
  nombre: 'Luna',
  edad: 5,
  raza: 'Pitbull',
  comida: ['croquetas', 'pollo', 'carne roja'],
  genero: 'hembra',
}

console.log(persona);
console.log(animal);

const persona2 = {...persona};
persona2.nombre = 'Leonardo';

const animal2 = {...animal};
animal2.nombre = 'Esteban';

console.log(persona2);
console.log(animal2);