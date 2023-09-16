/* **Iteración #1: Buscar el máximo**

Completa la función que tomando dos números como argumento y que devuelva el más alto. */

const sum = (numberOne, numberTwo) => {
  if (numberOne > numberTwo) {
    return numberOne;
  } else if (numberOne === numberTwo) {
    return "Son iguales!!";
  } else {
    return numberTwo;
  }
};
sum(3, 2); // aqui la llamo para verlo debo hacer console.log
console.log("numero mayor!", sum(3, 2)); // 3

/* **Iteración #2: Buscar la palabra más larga**
  
  Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.
  
  Puedes usar este array para probar tu función:
    
    */

const avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];
const findLongestWord = (array) => {
  // pongo array porque es una funcion hecha para recorrer cualquier array del archivo. Cuando la llame, dentro nombro el array que quiera recorrer
  let palabraMasLarga;

  let longitudMayor = 0;
  for (let i = 0; i < array.length; i++) {
    // for (inicializacion; condicion; actualizacion). La condicion es mientras i menos que la longitud del array, se sume una vuelta que es el i++ (actualiz.)
    if (array[i].length > longitudMayor) {
      // si array[i].length que se refiere a Hulk al ser la primera vuelta es mayor que longitudMayor.. (sigo abajo)
      longitudMayor = array[i].length; // longitudMayor = array[i].length. Despues con el i++ haria la segunda vuelta e iria a por Thor y llegaria al mismo proceso. Seguiria quedandose con 4 que es la longitud de Hulk.. asi con todos

      palabraMasLarga = array[i]; // que array[i] es un elemento del array, en este caso con la condicion que le hemos puesto seria 10 que es la longitud de captain A. por lo que imprima Captain A.
    }
  }
  return palabraMasLarga; // con el return devolvemos el elemento del array con la condicon de longitud mas larga que en este caso es Captain A.
}; // si en el return pongo que nos devuelva longitudMayor nos devolveria la longitud de Captain A. que seria 10 en vez de la palabra
findLongestWord(avengers); // aqui llamo a la funcion para que se ejecute sino no hace nada
console.log("La palabra mas larga es: ", findLongestWord(avengers)); // consoleo para verlo en terminal

/* **Iteración #3: Calcular la suma** 
  
  Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
  Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números de la matriz. 
  
  Puedes usar este array para probar tu función: */

const numbers = [9, 4, 80, 5, 45, 37, 58];

const sumaTotal = (array) => {
  const sumNumbers = array.reduce(
    (acumulador, valoractual) => acumulador + valoractual, // acumulador en este caso es 0 por defecto si no le digo nada, pero se lo he dicho en el ,0. El reduce lo que hace es recorrer el array y el valor actual es el primer elemento del array en la primera vuelta. Entonces va sumando hasta el final
    0
  ); // SIEMPRE en el metodo reduce lo que va entre ( accumulator , currentValue ) es el valor acumulador que le de y el valor actual, SIEMPRE
  return sumNumbers;
};

console.log("Suma de mis numeros del array", sumaTotal(numbers));

/* **Iteración #4: Calcular el promedio**
  
  Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función: */

const numbers2 = [12, 21, 38, 5, 45, 37, 6];

const promedioNumbers2 = (array) => {
  const sumaNumbers2 = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  return sumaNumbers2 / array.length;
};
console.log("Promedio de mis numeros2: ", promedioNumbers2(numbers2));

/* **Iteración #5: Calcular **
  
  Crea una función que reciba por parámetro un array y cuando es un valor number lo sume 
  y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función: */

// 1. funcion arrow y dentro
// 2. dos variables una sumara los numeros y otra los strings
// 3. despues crear un  bucle for para recorrer el array y dentro
// 4. y por ultimo una condicion dentro del bucle, con if
// 5. por ultimo añado un return (que va con la duncion al final fuera del bucly y la condicion) para que me devuelva lo que quiero. Lo hare a traves de
// 6. templateStrings
// 7. por ultimo llamo a la funcion
const mixedElements = [6, 1, "Rayo", 1, "vallecano", "10", "upgrade", 8, "hub"];

const sumaMixElements = (array) => {
  let sumNum = 0; // podria inicializarla sin el = 0.
  let sumStrings = 0;
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      sumNum += array[i];
    } else {
      sumStrings += array[i].length;
    }
  }
  return `La suma de los numeros es: ${sumNum} y la suma de los Strings es: ${sumStrings}`;
};
console.log(sumaMixElements(mixedElements));

/* **Iteración #6: Valores únicos**
  
  Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que 
  existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar
   tu función: */

const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];
// 1. si con un forEach recorrer el array con los duplicados con la condicion (en forma de ternario, LINEA 138 y 139) de :
// 2. si NO se encuentra el elemento en el array nuevo se le AÑADE y si le encuentra en el nuevo array NO se añade
const removeDuplicates = (array) => {
  const newSinDuplicados = [];
  array.forEach((element) => {
    // newSinDuplicados.includes(element) ? "" : newSinDuplicados.push(element); -_> este ternario es al reves. Si se encuentra NO se añade y  sino SI
    !newSinDuplicados.includes(element) ? newSinDuplicados.push(element) : "";
  });
  return newSinDuplicados;
};
console.log("sin duplicados: ", removeDuplicates(duplicates));

/* **Iteración #7: Buscador de nombres**
  
  Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro 
  de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición 
  de dicho elemento y por la contra un false. Puedes usar este array para probar tu función */

const nameFinder = [
  "Peter",
  "Steve",
  "Tony",
  "Natasha",
  "Clint",
  "Logan",
  "Xabier",
  "Bruce",
  "Peggy",
  "Jessica",
  "Marc",
];
const finderName = (array, nombre) => {
  if (array.includes(nombre)) {
    return `True, en la posicion ${array.indexOf(nombre)}`;
  } else {
    return false;
  }
};
console.log("Buscar nombre: ", finderName(nameFinder, "Marc"));

/* **Iteration #8: Contador de repeticiones**
  
  Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma. 
   Puedes usar este array para probar tu función:*/

const counterWords = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "upgrade",
  "code",
];
const repeatCounter = (array) => {
  let contador = {}; // objeto porque si tuviera que acceder a el es mas facil que si creara un ARRAY []
  array.forEach((element) => {
    // bucle que va a recorrer el array
    contador.hasOwnProperty(element) // metodo para acceder a la propiedad de un elemento de un array. Esta seria la condicion del ternario
      ? (contador[element] += 1) // si se cumple la condicion suma 1, es decir, si el elemento se encuentra en el objeto contador
      : (contador[element] = 1); // si el elemento no se encuentra en el objeto contador que hemos creado igualaria a 1
  });
  return contador; // return para que la funcion nos devuelva el nuevo objeto contador que hemos creado con lo que nos pide el ejercicio
};
console.log("Ejercicio 8: ", repeatCounter(counterWords));
