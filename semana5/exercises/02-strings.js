// Strings
    //a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar
    //toUpperCase).
    //b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5
    //caracteres guardando el resultado en una nueva variable (utilizar substring).
    //c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3
    //caracteres guardando el resultado en una nueva variable (utilizar substring).
    //d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra
    //en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring,
    //toUpperCase, toLowerCase y el operador +).
    //e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición
    //del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
    //f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
    //Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de
    //ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase,
    //toLowerCase y el operador +).
// a
var txt1 = 'Lately i don\'t sleep';
var txt2 = txt1.toUpperCase();
console.log(txt1.toUpperCase());
// b
var txt3 = 'Lately i don\'t sleep';
var txt4 = txt3.substring(0, 5);
console.log(txt4);
// c
var txt5 = 'Lately i don\'t sleep';
var txt6 = txt5.substring(17, 20);
console.log(txt6);
// d
var txt7 = 'lATELY i don\'t sleep';
var txt8 = txt7.substring(0, 1);
var txt9 = txt8.toUpperCase();
var txt0 = txt7.substring(1, 20);
var txtA = txt0.toLocaleLowerCase();
console.log(txt9 + txtA);
// e
var txtB = 'Lately i don\'t sleep';
var txtC = txtB.indexOf(' ');
console.log(txtC);
// f
var sleepLittleBlack = 'AtaHuaLpa yupAnQui';
var txtSpaceIndex = sleepLittleBlack.indexOf(' ');
var txtFirstWord = sleepLittleBlack.substring(0, txtSpaceIndex).toLowerCase();
var txtSecondWord = sleepLittleBlack.substring(txtSpaceIndex + 1).toLowerCase();
var txtFirstWordCapitalized = txtFirstWord.substring(0, 1).toUpperCase() + txtFirstWord.substring(1);
var txtSecondWordCapitalized = txtSecondWord.substring(0, 1).toUpperCase() + txtSecondWord.substring(1);
var txtFinal = txtFirstWordCapitalized + ' ' + txtSecondWordCapitalized;
console.log(txtFinal);