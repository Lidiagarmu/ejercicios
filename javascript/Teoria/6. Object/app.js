// un objeto es una coleccion de pares clave-valor
//......las claves son las cadenas de texto o simbolos
//......los valores pueden ser cualquier tipo de dato, incluyendo otro objeto. Los objetos se usan para almacenar y acceder a datos de manera estructurada

//ejemplos de objetos en JS:

//...objeto vacio

let obj = {};

//...objeto con algunas propiedades

let obje = {
  name: "pepe",
  age: 30,
  job: "developer",
};

//...acceder a las propiedades de un objeto

console.log(obje.name); //devuelve 'Pepe'
console.log(obje["age"]); //devuelve 30

//...modificar las propiedades de un objeto

obje.name = "Jane";
obje["age"] = 35;

console.log(obje.name); //devuelve ahora 'Jane'

//...añadir nuevas propiedades a un objeto

obje.location = "New York";

//...eliminar propiedades de un objeto

delete obje.job;

console.log(obje.job); // devuelve UNDEFINED puesto que hemos eliminado esta propiedad

//...Ademas de las propiedades, los objetos tambien pueden tener metodos, que son funciones asociadas al objeto. Ejemplo:

let objeto = {
  name: "Lidi",
  age: 29,
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

objeto.greet(); // devuelve 'Hello, my name is Lidi'

//OBJETOS  Y PROPIEDADES --> Las propiedades de un objeto podria decirse que es similar a las variables comunes, salvo por el nexo con el objeto

var myAvenger = new Object();
myAvenger.name = "Captain America";
myAvenger.power = 80;
myAvenger.creator = "Stan Lee";

console.log(myAvenger.power); // devuelve 80

/*...el ejemplo anterior podria escribirse usando un iniciador de objeto, que es una lista delimitada por comas de cero o mas pares de nombres 
de propiedad y valores asociados de un objeto encerrado entre {} */

let heroe = {
  name: "Captain America",
  power: 80,
  creator: "Stan Lee",
};

// ...las propiedades no asignadas de un objeto son UNDEFINED

myAvenger.alias;

console.log(myAvenger.alias); // devuelve UNDEFINED

//...tambien puedes acceder o establecer propiedades de los objetos en JS mediante la notacion de []

myAvenger["alias"] = "Capi";
console.log(myAvenger.alias); // devuelve 'Capi'. en la LINEA 73 aun no estaba definida la propiedad en la 79 si

// ENUMERAR PROPIEDADES OBJECTO --> Hay 2 formas nativas para ENUMERAR/RECORRER las propiedades de objetos

//.....bucles for...in --> este metodo recorre todas las propiedades enumerables de un objeto y su cadena de prototipos

let batman = {
  nombre: "Bruce",
  apellidos: "Wayne",
  localizacion: "Gotham",
  profesion: "multimillonario",
};

for (let clave in batman) {
  console.log(
    "Batman tiene la clave " + clave + " con valor: " + batman[clave]
  );
} // nueva variables clave para ver las claves de dentro de batman

//Retorna
//Batman tiene la clave nombre con valor: Bruce
//Batman tiene la clave apellidos con valor: Wayne
//Batman tiene la clave localizacion con valor: Gotham
//Batman tiene la clave profesion con valor: Multimillonario

//.....Object.keys(o) --> este metodo devuelve un arreglo con todos los nombres de propiedades enumerables ("claves") propias de un objeto o

//-----siguiende el ejemplo anterior let batman hacemos un arreglo con nueva variables para que nos consolee las claves de batman
let keys = Object.keys(batman);
console.log(keys); // devuelve ["nombre", "apellidos", "localizacion", "profesion"]
