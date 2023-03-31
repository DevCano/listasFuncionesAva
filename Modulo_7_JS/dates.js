// Dates
const date = new Date();
console.log(date);
//                     yyyy-mm-dd:h-m-s
const date2 = new Date(2021,0);
console.log(date2);

const date3 = new Date(0);
console.log(date3);

// Operaciones con fechas
console.log(date2 > date3);
console.log(date2.getTime() === date3.getTime());
console.log(date2.getDate());
console.log(date2.getMonth() + 1);
console.log(date2.getFullYear());
console.log(date2.toLocaleDateString('en-GB'));