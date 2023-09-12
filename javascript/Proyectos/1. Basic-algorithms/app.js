// ------------------ GUIA DE PRACTICA - EJERCICIOS ---------------------------

// Iteracion #1 : Variables

const myFavoriteHero = "Hulk";
const x = 50;
const h = 5;
const y = 10;
const z = h + y;
console.log(z); // 15

// Iteracion #2: Variables avanzadas
//-------------// 2.1 dado este JS cambiar el valor de la propi. age a 25
const character = { name: "Jack Sparrow", age: 10 };
character.age = 25;
console.log(character);
/*------------- 2.2 Declara 3 variables con los nombres y valores siguientes y muestralos por consola de la siguiente
manera 'Soy Jon Snow, tengo 24 años y me gustan los lobos.' */
firstName = "Jon";
lastName = "Snow";
age = 24;
console.log(
  "1º Forma: Soy ",
  firstName,
  lastName,
  "tengo ",
  age,
  "años y me gustan los lobos."
);

console.log(
  `2º Forma: Soy  ${firstName} ${lastName} tengo ${age} años y me gustan los lobos.`
);

/*----------2.3. Dado el siguiente javascript, imprime con un console.log la suma del precio de
ambos juguetes. */

const toy1 = { name: "Buss myYear", price: 19 };
const toy2 = { name: "Rallo mcKing", price: 29 };
const sumaToys = toy1.price + toy2.price;
console.log(sumaToys); // 48

/*----------2.4. Dado el siguiente javascript, actualiza el valor de la variable globalBasePrice a 25000 
y actualiza la propiedad finalPrice de todos los coches con el valor de su propiedad 
basePrice más el valor de la variable globalBasePrice */

let globalBasePrice = 10000;
const car1 = { name: "BMW m&m", basePrice: 50000, finalPrice: 60000 };
const car2 = { name: "Chevrolet Corbina", basePrice: 70000, finalPrice: 80000 };

globalBasePrice = 25000;
car1.finalPrice = car1.basePrice + globalBasePrice; // estoy modificando propiedades por lo que con escribir la propiedad = a lo que quiero que se convierta seria suficiente
car2.finalPrice = car2.basePrice + globalBasePrice;
console.log(car1); // { name: 'BMW m&m', basePrice: 50000, finalPrice: 75000 }
console.log("Precio final!! ", car1.finalPrice); // 75000

// Iteracion #3: Operadores

// 1.1 Multiplica 10 por 5 y muestra el resultado mediante console.

const multi = 10 * 5;
console.log("multiplicarcion", multi); // 50

//1.2 Divide 10 por 2 y muestra el resultado en un console.

const divi = 10 / 2;
console.log("mi division", divi); // 5

// 1.3 Muestra mediante un console el resto de dividir 15 por 9.

const resto = 15 % 9;
console.log("resto de: ", resto); // 6

// 1.4 Usa el correcto operador de asignación que resultará en o = 15, teniendo dos variables p = 10 y j = 5.

const p = 10;
const j = 5;
const o = p + j;
console.log("suma de P y J", o); // 15

// 1.5 Usa el correcto operador de asignación que resultará en i = 50,teniendo dos variables c = 10 y m = 5.

const c = 10;
const m = 5;
const i = c * m;

console.log(i); // 50

// Iteracion #4: Arrays

// 1.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.

const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
const heroe = avengers[0];
console.log("me quedo solo con Hulk ", heroe); // Me quedo solo con Hulk  HULK

// 1.2 Cambia el primer elemento de avengers a "IRONMAN"

avengers[0] = "IRONMAN";
console.log("Cambio Hulk por Ironman", avengers); // Cambio Hulk por Ironman [ 'IRONMAN', 'SPIDERMAN', 'BLACK PANTHER' ]

// 1.3 console numero de elementos en el array usando la propiedad correcta de Array.

console.log("Nº de elementos del array: ", avengers.length); // 3

// 1.4 Añade 2 elementos al array: "Morty" y "Summer". Muestra en consola el último personaje del array

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];

rickAndMortyCharacters.push("Morty", "Summer");
console.log(rickAndMortyCharacters); // aqui estoy añadiendo Morty and Summer
console.log("Mostrar ultimo elemento del array ", rickAndMortyCharacters[4]); // aqui muestro solo el ultimo elemento del array --> imprime "Mostrar ultimo elemento del array  Summer"

// 1.5 Elimina el último elemento del array y muestra el primero por consola.

rickAndMortyCharacters.pop();
console.log(
  "Elimino ultimo elemento del array y muestro el primero ",
  rickAndMortyCharacters.shift()
); // --> Elimino ultimo elemento del array [ 'Rick', 'Beth', 'Jerry', 'Morty' ] con el metodo .pop() y muestro el primero con .shift()
// primer elemento Rick

// 1.6 Elimina el segundo elemento del array y muestra el array por consola.
console.log("prueba", rickAndMortyCharacters);
rickAndMortyCharacters.splice(1, 1); // metodo splice(1, 1) --> a partir de la posicion 1, elimina 1 elemento.
// Si fuera .splice(0, 2) --> a partir de la posicion 0, elimina 2 elementos es decir IMPRIMIRIA: Morty
console.log("Elimino 2 elemento :", rickAndMortyCharacters);

// Iteracion #5: Condicionales -->>> en base al sigiente codigo, muestra los mensajes correctos por consola:

const number1 = 10;
const number2 = 20;
const number3 = 2;

// si la condicion IF (.....) no se cumpliera no mostraria nada en consola. Como se cumplen todas muestra todos los consoles.log
if (number1 === 10) {
  console.log("number1 es estrictamente igual a 10");
}

if (number2 / number1 == number3) {
  console.log("number2 dividido entre number1 es igual a 2");
}

if (number1 !== number2) {
  console.log("number1 es estrictamente distinto a number2");
}

if (number3 != number1) {
  console.log("number3 es distinto number1");
}

if (number3 * 5 == number1 || number1 / 5 == number3) {
  console.log("number3 por 5 es igual a number1");
}

if (number3 * 5 == number1 && number1 * 2 == number2) {
  console.log(
    "number3 por 5 es igual a number1 Y number1 por 2 es igual a number2"
  );
}

if (number2 / 2 == number1 || number1 / 5 == number3) {
  console.log(
    "number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3"
  );
}

// Iteracion #6: Bucles

//1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.

for (let i = 0; i <= 9; i++) {
  console.log("Mi bucle de 0 a 9", i);
}

/* 1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo 
cuando el resto del numero dividido entre 2 sea 0.*/

for (let i = 0; i <= 9; i++) {
  if (i % 2 == 0)
    console.log("Mi bucle de 0 a 9 solo si divido entre 2 es 0", i);
} // imprime : 0 2, 4, 6, 8

/* 1.3 Crea un bucle para conseguir dormir contando ovejas. 
Este bucle tiene que dar 10 vueltas, es decir, 10 console.log.
Muestra por consola un mensaje diciendo 'Intentando dormir 🐑' en cada vuelta del bucle 
y cambia el mensaje en la décima vuelta a 'Dormido!'. */

for (let i = 0; i <= 10; i++) {
  if (i <= 9) {
    console.log("Intentando dormir 🐑");
  } else {
    console.log("DORMIDO!");
  }
} // else no tiene condicion. es simplmente si no se cumple la condicion del if imprime el console.log del else

/* 
Intentando dormir 🐑
Intentando dormir 🐑
Intentando dormir 🐑
Intentando dormir 🐑
Intentando dormir 🐑
Intentando dormir 🐑
Intentando dormir 🐑
Intentando dormir 🐑
Intentando dormir 🐑
Intentando dormir 🐑
DORMIDO!
*/
