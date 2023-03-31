// Crea un archivo llamado fechas.js que contenga las siguientes líneas

// - La fecha de hoy
const date = new Date();
console.log(date);

// - La fecha de tu nacimiento
const dateOfBirth = new Date(2000,10,22);
console.log(dateOfBirth);

// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
const isOlder = date > dateOfBirth;
console.log(isOlder);

// - Una variable que contenga el día de tu nacimiento
const mydate = dateOfBirth.getDate()
console.log(mydate);

// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const month = dateOfBirth.getMonth() + 1;
console.log(month);

// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)
const year = dateOfBirth.getFullYear();
console.log(year);