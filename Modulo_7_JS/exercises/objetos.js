// Crea un archivo llamado objetos.js que contenga las siguientes líneas

// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const info = {
  name: 'Efrain',
  lastName: 'Tovar meza',
  age: 22,
  height: 1.74,
  iDeveloper: true,
};

const friendsInfo = [
  {
  name: 'Edgar',
  lastName: 'Blas Torres',
  age: 22,
  height: 1.60,
  iDeveloper: true,
  },
  {
    name: 'Abel',
    lastName: 'Gonzales Peraz',
    age: 22,
    height: 1.74,
    iDeveloper: true,
  },
];

// - Una variable que obtenga tu edad a partir del objeto anterior
const age = info.age;
console.log(age);

// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const myInfo = { ...info};
console.log(myInfo);

const myFriends = { ...friendsInfo};
console.log(myFriends);

// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
const sort = friendsInfo.sort((a,b) => b.height-a.height);
console.log(sort);