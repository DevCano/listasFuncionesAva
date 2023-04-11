const myFunction = param => {
  try {
    if( typeof param != "number") throw new TypeError('El valor deve ser un numero');
    return param * 2;
  } catch (error) {
    console.error(error);
  }
}

const mult = myFunction('2345');
// InternalError, SyntaxError, TypeError. RangeError y ReferenceError