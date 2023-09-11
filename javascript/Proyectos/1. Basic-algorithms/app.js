// ------------------ GUIA DE PRACTICA ---------------------------

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

// Iteracion #4: Arrays
// Iteracion #5: Condicionales
// Iteracion #6: Bucles
