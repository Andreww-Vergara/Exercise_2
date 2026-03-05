/*Ejercicio 1
Build an array using a while loop
Instructions: create an empty array and populate it with number from 1 to 20 using a while loop
*/

//primero creo un array sin elementos adentro que es donde guardaré los números
array=[]
//después usaré una variable x iniciada en 0 para modificar el valor que se estará almacenando
x = 0;
//entonces uso un while con la condicion que x no sea más grande que 20 como mi limite
while (x<20){
  x=x+1
  array.push(x)
//así que en cada iteración x aumenta 1 y se almacena el valor en el array
}
//finalmente imprimo el resultado en la consola
console.log(array)