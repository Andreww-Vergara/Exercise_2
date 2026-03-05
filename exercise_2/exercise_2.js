/*Ejercicio 2
Loop control and conditions

Instructions: 
-Print all values of the array using a single console.log & one for loop
-Modify the loop to skip all even numbers.
-Modify the loop so that it stops when it reaches number 10.
*/

//Primero se crea el array para trabajar con él
array=[]
//directo pasamos a un for con límite de 11 para que imprima 10
for(i=0; i<11; i++){
//luego condicionamos que si no hay residuo al dividir i (contador) entre 2, se guarda en array
  if(i%2){
    array.push(i);
  }
}
//al final muestro el resultado en la consola
console.log(array)