// al igual en los arrays, en los strings podemos acceder a cada uno de ellos de manera individual haciendo use de corchetes []
const pokemon = "pikachu";
console.log(pokemon[3]);

/*metodos que se usan cuando trabajas con Strings
1) length
2) includes
3) repeat
4) replace
5) replaceAll
6) slice
7) split
8) toLowercase
9) toUpperCase
10) trim */

// length  --> nos permite conocer la longitud de un string
const country = "Spain";
console.log(country.length); //retorna 5

// includes --> nos permite conocer si un caracter o una porcion de caracteres se encuentran dentro de un string devolviendo un valor boleano

const quote = "to infinity and beyond";
const word = "infinity";
console.log(quote.includes(word)); // retorna: true

// repeat --> devuelve un nuevo string con el numero de copias del string donde lo estemos aplicando. Este numero se le pasara por argunmento al metodo

const droid = "roger";
console.log(droid.repeat(2)); // retorna rogerroger

/* replace --> devuelve un string con el string insertado por argumento sustituido por el segundo argumento, es decir
como primer argumento recibira el substring que queremos sustituir y como segundo argumento el substring que queremos que reemplace a este*/

const movie = "Star Trek";
console.log(movie.replace("Trek", "Wars")); // retorna "Star Wars"

// replaceAll --> es igual de replace pero este reemplaza todas las coincidencias encontradas en el strings con el substring indicado

const quoote =
  "Un Anillo para gobernarlos a todos. Un Anillo para encontrarlos, un Anillo para atraerlos a todos y atarlos a las tinieblas en la Tierra de mordor  donde se extienden las Sombras.";
console.log(quoote.replaceAll("Anillo", "Gato"));

// slice -->devuelve una nueva cadena con la porcion delimitada entre la posicion del primer argumente y la posicion del segundo argumento

const album = "Master of Puppets"; // en este caso los argumentos son 10 y 13
console.log(album.slice(10, 13)); //retorna "Pup"

// split --> este genera un array de tantos elementos como se indique en el segundo argumento indicadole el elemento separador en el primer argumento

const phrase = "Buenos dias, ¿como estas Ramona";
console.log(phrase.split("", "3")); //retorna "Buenos","dias", "¿como"

// toLowerCase --> devuelve el valor del string convertido a minusculas

const naame = "Peter";
console.log(naame.toLowerCase()); // retorna "Peter"

// toUpperCasa --> devuelve el valor del string convertido a mayusculas

const nickname = "Pedro";
console.log(nickname.toUpperCase()); // retorna "PEDRO"

// trim --> elimina los espacion en blanco desde el principio hasta el final del string

const frase = "          Luke, yo soy tu padre    ";
console.log(frase.trim()); // retorna "Luke, yo soy tu padre"
