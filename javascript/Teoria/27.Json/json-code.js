// METODO json es un formato de lectura de datos y lo devuelve en formato de string. Es de uso diario

const myUsers = { name: "Jhon", age: 30 };

console.log(myUsers); //muestra clave y valor pintado de color, clave y valor . No lo muestra en forma de string

console.log(JSON.stringify(myUsers)); // al escribir JSON. estoy entrando en el tipo
//muestra en terminal --> {"name":"Jhon","age":30} en forma de string

// Y, ¿como sabemos que es en formato string? Vease en FILA 5 como no muestra en forma string

// Podria ser:

console.log(JSON.stringify({ name: "Peter", age: 10 })); // muestra tambien en formato String

//--------

const json = '{"name":"Alice", "age":30,"city":"New York"}';

const obj = JSON.parse(json);

console.log(obj); // nos lo devuelve como si fuera un objeto. Nos quita las comillas. Al igual que en FILA 5
//El método JSON. parse() analiza una cadena de texto como JSON, transformando opcionalmente el valor producido por el análisi
