/*
Exercise 3 — Interactive Counter Menu
Create an interactive menu in the browser using JavaScript only.
The program must:
1. Display the counter value and the menu with the following options:
1. Increment counter
2. Decrement counter
4. Exit
2. Allow the user to repeatedly choose an option.
3. Update and display the counter value accordingly.
4. Continue running until the user selects Exit.
*/
let contador = 0;//Inicio el contador solicitado en 0
let option;//Variable para manejar la opción seleccionada

do {//el Do se ejecuta 1 vez y luego es evaluado por el while
    option = parseInt(prompt(//prompt pide algo en string y parseInt lo convierte a entero
        "==== Counter value: ====" + contador + "\n\n",
        "-- Choose an Option: --\n",
        "1. Increment counter\n",
        "2. Decrement counter\n",
        "4. Exit\n\n"
        ));

    switch(option) {//aqui se evalua la opción seleccionada
        case 1:
            contador++;//cuando pide incrementar
            alert("Counter increased to: " + contador);
            break;
        case 2:
            contador--;//cuando pide bajar
            alert("Counter decreased to: " + contador);
            break;
        case 4://cuando pide salir
            alert("This program has finished. Bye!");
            break;
        default://cuando se ingresa una opción inválida
            alert("Invalid option.");
    }

} while(option !== 4);//evaluacion para continuar
