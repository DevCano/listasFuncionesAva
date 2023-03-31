// Crea un archivo JS que contenga las siguientes líneas
// - Una función sin parámetros que devuelva siempre "true"
function boolean() {
  return true;
}
console.log(boolean());
console.log(boolean());
console.log(boolean());
// - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
const functionPromise = new Promise((resolve, reject) => {
  try {
    setTimeout(() => {
      resolve()
    }, 5000);
  } catch (error) {
    reject();
  }
});

functionPromise.then(() => {
  console.log('Hola soy una promesa');
}).catch((err) => {
  console.log('Ocurrio un error', err);
});

// - Una función generadora de índices pares automáticos
function* generateIndex() {
  let id = 0;
  while (true) {
    id+=2;
    if(id === 10) return id;
    yield id
  }
}

const gen = generateIndex();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
