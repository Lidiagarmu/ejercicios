/*los bucles son una herramienta muy util. Sirven para ejecutar una accion o un conjunto
de acciones varias veces, segun una condicion o serie de condiciones. 
Hay  varios tipos de bucles y cada uno tiene su propia sintaxis y usos especificos

1)BUCLE FOR
2)BUCLE WHILE
3)BUCLE FOREACH
4)BUCLE FOR OF
5)BUCLE FOR IN
6)BUCLE FOR OF vs FOR IN
7)BUCLE FOR OF vs FOR EACH */

/* 1) FOR --> se usa para ejecutar un bloque de codigo un nº determinado de veces. Sintaxis:

for (inicializacion; condicion; actualizacion) {
  //codigo a ejecutar
} 

    - la inicializacion: se ejecuta una vez al principio del bucle y suele utilizarse para inicializar una variable de control
    - la condicion: se evalua al principio de cada iteracion del bucle, y si se cumple se ejecuta el bloque de codigo. Si la condicion
    no se cumple, el bucle termina
    - la actualizacion: se ejecuta al final de cada iteracion del bucle y suele utilizarse para modificar la variable control
*/

//ejemplo de bucle FOR que imprime los numeros del 1 al 10:

for (let i = 1; i <= 10; i++) {
  console.log(i);
}
/*   -la variable i se INICIALIZA a 1 al principio del bucle
     -se EVALUA la condicion i<= 10, que se cumple mientras i sea menor o igual que 10. 
      por lo que se ejecuta el bloque del codigo, que imprime el valor i en la consola
      -al final de cada iteracion se ejecuta la ACTUALIZACION i++, que incrementa el valor de i en 1 
      */

/* 2) WHILE --> se usa para ejecutar un bloque de codigo mientras se cumpla una determinada condicion. Sintaxis:

while (condicion) {
  //codigo a ejecutar
}
*/

let i = 1;

while (i <= 10) {
  console.log("El valor del bucle es: " + i);
  i++;
} // mismo ejemplo que en el bucle FOR para comparar

// ejemplo  bucle whileLidi
let l = 3;
while (l <= 9) {
  console.log("El bucle seria: " + l);
  l++;
}

// ejemplo mas practico. Creamos una lista de numeros y lo iteramos en cuanto se cumpla la condicion queremos sacar un mensaje por consola

let numberList = [1, 2, 3, 4, 7, 8, 10, 11, 13];
for (let index = 0; index < numberList.length; index++) {
  if (numberList[index] === 13) {
    console.log(`Dicen que da mala suerte jiji, ---> en la posición  ${index}`);
  }
}

/*Podemos ANIDAR tantos BUCLES como queramos, es decir, si nuestro elemento iterado tiene a su vez otro elemento que es posible iterar
podemos usar un blucle dentro de otro bucle */

let studentList = [
  {
    name: "JdelaCruz",
    codeList: ["Js", "React"],
  },
  {
    name: "EdDarko",
    codeList: ["Js", "Node"],
  }, // let studentList ES UNA VARIABLE ARRAY conpuesta por 2 objetos. el primero es una clave con valor string y la segunda clave con array
];

console.log("longitud studentList", studentList);
for (let i = 0; i < studentList.length; i++) {
  console.log("recorremos studentList", studentList[i]);

  for (let j = 0; j < studentList[i].codeList.length; j++) {
    console.log(studentList[i].name + "Works: " + studentList[i].codeList[j]);
  }
}

// 3) FOREACH --> Es util para generar una funcion para ejecutarla por cada vuelta de bucle

let studenList2 = ["IkerCas", "FerTorres", "RoberLewan", "NeymarJr"];
/*no arrow*/
studenList2.forEach(function (element) {
  console.log(element);
});

/*arrow */
let studenList3 = ["CrisRonaldo", "KokeResu", "JanOblack", "CholoSim"];

studenList3.forEach((element) => console.log(element));

/* 4) FOR OF --> este bucle nos permite ejecutar un atajo para realizar bucles. Nos devuelve
 automanticamente los valores de los elementos actuales iterando a través del objeto a traves de la siguiente sintaxis: 
 
 for (variable of objeto_iterable) {...}
 */

//Este bucle itera a lo largo de los objetos iterables como Array, Map, String, Arguments, etc...

// Array

let ninjaTurtles = ["Leonardo", "Michelangelo", "Donatelo", "Raphael"];
findLongesWord;

// String

let name = "Master Khan";
for (var word of name) {
  console.log(word);
}
// Set

let powerRangers = new Set();
powerRangers.add(1);
powerRangers.add("Rojo");

for (var ranger of powerRangers) {
  console.log(ranger);
}

// Arguments

function mixArgs() {}

// 5) FOR IN

// 6) FOR OF VS FOR OF

// 7) FOR OF VS FOR EACH
