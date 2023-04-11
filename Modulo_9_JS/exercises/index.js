const logger = require('../logs-winston.js');


const MyError = param => {
  try {
    if( typeof param != "number") throw new TypeError('El valor deve ser un numero');
    return param * 2;
  } catch (error) {
    // console.error(error);
    logger.error(error.message);
  }
}

const mult = MyError('2345');
