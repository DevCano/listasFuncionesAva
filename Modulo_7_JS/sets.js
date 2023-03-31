// Sest o Conjuntos
const array = [1, 2, 3, 4, 5, 6];
const mySet = new Set(array); // Esta funcion elimina elementos repetidos, 
// se deve tomar en cuenta que para objectos no aplica
mySet.add(45);
console.log(mySet);

// .delete()
mySet.delete(45);
console.log(mySet);

// // .clear()
// mySet.clear();
// console.log(mySet);

// .has()
console.log(mySet.has(1));
console.log(mySet.values());




