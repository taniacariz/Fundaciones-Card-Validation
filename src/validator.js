// || OR
//split, toma un texto y lo transforma en un arreglo
//parseInt comprueba el primer argumento y devuelve un entero
//map, toma hasta 3 paramétros, + obliga a que el valor sea siempre un número (similar a parseInt)

const validator = { // Objeto, isValid, Maskify es un método
  isValid(cardNumber) {
    //Se evita un string vació con null 
    if (cardNumber == "" || cardNumber == null) {
      return false;
    }
    //se parcea para evitar sólo núneros 0
    if (parseInt(cardNumber) == 0) {
      return false;
    }

    let newArray = cardNumber.split("").map(Number).reverse();

    //Tomar pares para multiplicarlos
    for (let i = 0; i < newArray.length; i++) {
      // divido en 2 no es igual a 0
      if (i % 2 != 0) {
        newArray[i] = (newArray[i] * 2)
      }
      // > 9 debo sumar los dígitos
      if (newArray[i] > 9) {
        let newValues = newArray[i].toString().split("").map(Number);

        newArray[i] = newValues[0] + newValues[1];
      }
    }
    //Sumar todos los indices y si termina en cero la tarjeta es válida
    let newValuesOne = 0;
    for (let i = 0; i < newArray.length; i++) {
      newValuesOne = newArray[i] + newValuesOne;
    }

    return newValuesOne % 10 == 0 ? true : false;
  },

  //Maskify = método que oculta los números a excepción de los últimos cuatro

  maskify: (cardNumber) => { //elemento flecha

    //long es el largo de cardNumber - 4 posiciones
    let long = cardNumber.length - 4;
    //últimos 4 carácteres 
    let lastFour = cardNumber.substring(cardNumber.length - 4)
    let result = "";
    //for recorre el arreglo exceptuando las últimas 4 posiciones
    for (let mask = 1; mask <= long; mask++) {
      //se suman los números finales + los que están ocultos 
      result += "#";
    }

    //Sumo a mi arreglo final los Strings

    return result + lastFour;
  }
};

export default validator;

