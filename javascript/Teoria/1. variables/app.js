let myFavoriteHero = "Hulk";
let x = 50;
let h = 5;
let y = 10;
let z = h + y;
let character = { name: "Jack Frost", age: 10 };
let firstName = "Lili";
let lastName = "Snow";
let age = 24;

// voy a crear una funcion para cambiar la age a 250
const changeAge = (edad) => {
  age = edad;
};
changeAge(250); // aqui he invocado a la funcion para que actue
console.log(age);

// he creado una funcion arrow para cambiar nombre fristName
const changeName = (name, numero = 5) => {
  // = () => {} arrow
  firstName = name;
  console.log(numero);
};
changeName("Lau", 1); //llamar o invocar la funcion para que haga algo la funcion creada

const sentence = `Soy ${firstName} ${lastName}, tengo ${age} años y me gustan los lobos`;
console.log(sentence); //los ${} los pongo por si las variables van cambiando. Podria escribir la frase directamente pero no las cambiaria en caso de que fueran variando

//2 maneras de acceder a las clave/valor de un objeto y verlo en terminal. esto no lo cambia
console.log(character.name);
console.log(character["age"]);

//acceder a la clave age de la variable character para poder modificarla y comprobar el cambio con console.log
character.age = 250;
console.log(character);

// a la variable de tipo objeto character, le hemos creado otra clave llamada lastname con un valor llamada garcia
character.lastname = "Garcia";
console.log(character);

//ejercicio ultimo javascript
const toy1 = { name: "Buss myYear", price: 19 };
const toy2 = { name: "Rallo mcKing", price: 29 };

//creo  nueva variable que es la suma de los precios de los juguetes
let totalPrice = toy1.price + toy2.price;
console.log(totalPrice);

//funcion arrow que suma los numeros que le das por parametros
const suma = (number1, number2) => {
  return number1 + number2;
};
console.log(suma(toy1.price, toy2.price));

console.log(suma(213, 1));
console.log(suma("a", "c"));

//prueba inventada por mi con la funcion typeof la cual nos indica el tipo de variable en cada momento
let num = typeof 3;
console.log(num);
let lidi = typeof "hola";
console.log(lidi);
