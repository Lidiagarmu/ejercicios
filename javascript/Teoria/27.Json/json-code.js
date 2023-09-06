/* METODO json es un formato de lectura de datos y lo devuelve en formato de string. Es de uso diario. Es decir, es un formato
de texto que se usa para representar datos estructurados en la forma de objetos*/

const myUsers = { name: "Alice", age: 40 };

console.log(myUsers); //muestra clave y valor pintado de color, clave y valor . No lo muestra en forma de string

console.log(JSON.stringify(myUsers)); // al escribir JSON. estoy entrando en el tipo
//muestra en terminal --> {"name":"Alice","age":50} en forma de string

// Podria ser:

console.log(JSON.stringify({ name: "Peter", age: 10 })); // muestra tambien en formato String


/* Un objeto JSON se representa como una serie de pares clave-valor separados por comas, con las claves entre comillas dobles
y los valores pueden ser de cualquier tipo, incluyendo numeros, cadenas de texto, booleanos o incluso otro objeto o matriz.
      -   Los datos estan definidos mediante nombre/valor
      -   Los datos estan separados por comas
      -   Las llaves contienen objetos. 