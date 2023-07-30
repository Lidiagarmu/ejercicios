/*los bucles son una herramienta muy util. Sirven para ejecutar una accion o un conjunto
de acciones varias veces, segun una condicion o serie de condiciones. 
Hay  varios tipos de bucles y cada uno tiene su propia sintaxis y usos especificos

1)BUCLE FOR
2)BUCLE WHILE
3)BUCLE FOR
4)BUCLE FOREACH
5)BUCLE FOR OF
6)BUCLE FOR IN
7)BUCLE FOR OF vs FOR IN
8)BUCLE FOR OF vs FOR EACH */

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
/* -la variable i se INICIALIZA a 1 al principio del bucle
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
