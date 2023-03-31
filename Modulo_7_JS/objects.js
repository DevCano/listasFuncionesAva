// Objetos
const obj = {
    title: 'Titanic',
    author : 'James Cameron',
    date: '1997-12-19',
  };
// Para crear un duplicado del objeto se tine que hacer 
// de la siguiente manera
const obj2 = { ...obj };

// Ordenamiento de lista de objetos
const movies = [
  {
    title: 'Titanic',
    author : 'James Cameron',
    date: '1997-12-19',
  },
  {
    title: 'El Señor de los Anillos:',
    author : 'Peter Jackson',
    date: '2001-12-19',
  },
  {
    title: 'El Gran Hotel Budapest',
    author : 'Wes Anderson',
    date: '2014-02-06',
  }
];
console.log(movies);

// Ordenamiento por fechas
const movieSort = movies.sort((a,b) => new Date(b.date) - new Date(a.date));
console.log(movieSort);


