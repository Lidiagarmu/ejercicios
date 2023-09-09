/* El metodo reduce() --> es una funcion de la clase Array que permite aplicar una funcion a cada elemento 
de un array y reducirlo a un unico valor. 

Es muy util para realizar calculos sobre un array de una forma rapida y sencilla */

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);

console.log(sum); // 15

/* En este ejemplo, hemos creado un array numbers con cinco números. Luego, hemos utilizado 
reduce() para sumar todos los números del array y guardar el resultado en una variable sum. 
Al final, hemos imprimido esta variable en la consola y podemos ver que contiene la suma de todos 
los números del array. */

//---------Otro ejemplo de cómo se puede usar **`reduce()`** es para calcular el promedio de un array de números:

const scores = [90, 75, 60, 100, 85];

const average =
  scores.reduce((accumulator, currentValue) => accumulator + currentValue) /
  scores.length;

console.log(average); // 81

/* En este caso, tenemos un array `scores` con cinco números que representan las calificaciones de 
distintos estudiantes. Usamos `reduce()` para sumar todas las calificaciones y luego dividimos el 
resultado entre la cantidad de calificaciones para obtener el promedio. Al final, imprimimos el promedio 
en la consola y podemos ver que es 81. */

// AVANZANDO EN EL USO DEL REDUCE() ---------------------

/* Al igual que .map(), .reduce() también ejecuta una devolución de llamada para cada elemento de un array. 
Lo diferente aquí es que reduce el resultado de esta devolución de llamada (el acumulador) de un elemento del 
array a otro.

El acumulador puede ser prácticamente cualquier cosa (entero, cadena, objeto, etc.) y debe instanciarse o
 pasarse al llamar a .reduce().*/

// EJEMPLO -->  Digamos que tienes una Array con estos pilotos y sus respectivos años de experiencia.

var pilots = [
  { id: 10, name: "Poe Dameron", years: 14 },
  { id: 2, name: "Temmin 'Snap' Wexley", years: 30 },
  { id: 41, name: "Tallissan Lintra", years: 16 },
  { id: 99, name: "Ello Asty", years: 22 },
];
