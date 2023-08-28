/* OPERADOR DE ASIGNACION:
 
Asignacion               x = y 
Asignacion Adicion       x+= y (es decir, x = x + y) 
Asignacion Resta         x-= y (es decir, x = x - y)
" " Multiplicacion       x*= y
" " Division             x/= y 
" " Residuo (resto)      x%= y
" " AND bit a bit        x &= y 

//---------------------------------------------------------------------------------------


*/

/* OPERADORES DE COMPARACION:

let x = 3;
let y = 5;


1.Igual (==) Retorna TRUE si son iguales

3 == x;
"3" == x;
"3" == 3;

2. No es Igual (!=) Retorna TRUE si NO son iguales

x != 4;
x != "4";

3. Estrictamente Igual (===) retorna TRUE si coincide en VALOR y TIPO 

3 === x;

4. Desigualdad Estricta (!==)   retorna TRUE si estos no coinciden en tipo o valor

x !== "3";

5. Mayor que (>) retorna TRUE si el operador izdo es mayor

y > x;

6. Menos que (<) retorna TRUE si el operador izdo es menor
7. Mayor o igual (>=) Devuelve TRUE si el operador izdo es mayor o igual
8. Menor o igual que (<=) devuelve TRUE si el operador izdo es menos o igual

*/

//---------------------------------------------------------------------------------------

// OPERADORES LOGICOS:

//operador OR representado por || . devuelve TRUE si unos de los valores combinados es TRUE

var tengoEfectivo = true;
var tengoTarjeta = false;
var puedoPagar = tengoEfectivo || tengoTarjeta;
console.log(puedoPagar); // ---> devuelve TRUE porque tengo EFECTIVO

// operador AND representado por && , este devuelve TRUE si todos los valores combinados son verdaderos

var tengoCoche = false;
var tengoCarnetDeConducir = true;
var puedoConducir = tengoCoche && tengoCarnetDeConducir;
console.log(puedoConducir); // ----> me devuelve FALSE porque no tengo coche

// operador de negacion representado por !  se usa para negar el valor de una expresion, es decir, darle el valor opuesto

!true; // --> devuelve FALSE

// OPERADORES DE CADENA:
