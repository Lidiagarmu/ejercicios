// la sintaxis de una funcion en Javascript es la siguiente:
function nombreDeLaFuncion(parametros) {
  //codigo a ejecutar
}

// los parametros son variables que se pasan a la funcion y que se pueden utilizar dentro de ella. Una funcion puede tener cero o mas parametros
// para llamar a la funcion, se utiliza su nombre seguido de parentesis y, en algunos casos, de argumentos entre ellos.
//los argumentos son valores que se pasan a la funcion y que se asignan a los parametros de la funcion

function suma(a, b) {
  return a + b;
}
let resultado = suma(3, 4); // resultado = 7
console.log(resultado);
/*en el caso anterior la funcion suma tiene dos parametros: a y b. Al 
llamar a la funcion con suma(3, 4) se asignan los valores 3 y 4 a los parametros a y b, respectivamente.*/

function atleti(x, y) {
  return x == y;
}
let balonDeOro = atleti("Torres", "koke");
console.log(balonDeOro); // muestra booleano false puesto que llamando a la funcion atleti vemos que los parametros torres y koke no son ==

/* 
1) DECLARACION DE FUNCIONES
2) VALORES PREDETERMINADOS
3) RETORNO DE LAS FUNCIONES
4) ALTERNATIVA A PARAMETROS INDETERMINADOS
5) NOMBRADO DE FUNCIONES
6) ARROW FUNCTIONS
7) ARGUMENTOS EN LAS ARROW FUNCTIONS
8) LIMITACIONES EN LAS ARROW FUNCTIONS */

/*1) DECLARACION DE FUNCIONES -> sintaxis para declarar una funcion:
palabra reservada FUNCTION + nombre de mi funcion + unos () donde iran nuestros parametros + {} en las cuales realizaremos nuestras operaciones */

function pokemon() {
  // lo que aparece entre llaves es conocido como el cuerpo de la funcion
  console.log("Pikachu, ¡IMPACT TRUENO!");
}

function podemonParams(name, attack) {
  console.log("¡${name} ${attack}");
} // una vez tenemos nuestras funciones declaradas tenemos que invocarlas para que realicen la funcionalidad programada

pokemon();
podemonParams("Charmander", "Ascuas");
pokemonParams("Squirtel", "Pistola de agua");

// 2) VALORES PREDETERMINADOS --> si una funcion es llamada pero no se le proporciona un argumento o parametro, su valo correspondiente se convierte en undefined
function pokemonAttackParams(name, attack) {
  console.log(`¡${name} ${attack}!`);
}

pokemonAttackParams("bulbasaur"); // aqui invocamos a la funcion pero le estamos pasando solo un argumento por parametro. Nos mostrara "¡Bulbasaur undefined!" Como no se pasa un valor de attack, este se vuelve undefined
/* Imaginar querer tener un ataque pokemon por defecto cuando no le pasemos el argumento attack a nuestra funcion.
Podemos especificar para ellos un valor llamado DEFAULT predeterminado en la declaracion de funcion usando =. */

function pokemonAttackParamsDefault(name, attack = "Araque arena") {
  console.log(" ¡${name} ${attack}!");
}
pokemonAttackParamsDefault("Onix"); // muestra ¡Onix Ataque arena!

function pokemonAttackParams(name, attack) {
  console.log(`¡${name} ${attack}!`);
}

pokemonAttackParams("bulbasaur");
function pokemonAttackParamsDefault(name, attack = "Ataque arena") {
  console.log(` ¡${name} ${attack}! `);
}

pokemonAttackParamsDefault("Onix"); // ¡Onix Ataque arena!
