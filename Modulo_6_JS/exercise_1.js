// Crea un archivo JS que contenga las siguientes líneas

// - Una variable que contenga la lista de la compra (mínimo 5 elementos)
const compras = ['leche', 'arroz', 'jamon', 'carne', 'azucar', 'huevos' ];

// - Modifica la lista de la compra y añádele "Aceite de Girasol"
compras.push('Aceite de Girasol');
console.log(compras);

// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
compras.pop('Aceite de Girasol');
console.log(compras);

// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const moviesLiked = [
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

// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const filterMovies = moviesLiked.filter((item) => item.date > '2010-01-01');
console.log(filterMovies);

// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const authors = moviesLiked.map((item) => item.author);
console.log(authors);

// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const titles = moviesLiked.map((item) => item.title);
console.log(titles);

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const concatAuthorTitle = authors.concat(titles);
console.log(concatAuthorTitle);

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const authorAndTitles = [...titles, ...authors];
console.log(authorAndTitles);


