// Funciones
    // a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar
    // la función y guardar el resultado en una variable, mostrando el valor de dicha variable en
    // la consola del navegador.
    // b. A la función suma anterior, agregarle una validación para controlar si alguno de los
    // parámetros no es un número; de no ser un número, mostrar una alerta aclarando que
    // uno de los parámetros tiene error y retornar el valor NaN como resultado.
    // c. Aparte, crear una función validate Integer que reciba un número como parámetro y
    // devuelva verdadero si es un número entero.
    // d. A la función suma del ejercicio 6b) agregarle una llamada a la función del ejercicio 6c. y
    // que valide que los números sean enteros. En caso que haya decimales mostrar un alerta
    // con el error y retornar el número convertido a entero (redondeado).
    // e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la
    // función suma probando que todo siga funcionando igual.
// a
function suma(numA, numB) {
    return numA + numB;
}
var sumaResult = suma(23, 57);
console.log('a:', sumaResult);
// b
function suma2(numA, numB) {
    if (isNaN(numA) || isNaN(numB)) {
        alert('One of the numbers is not a number');
        return NaN;
    } else {
        return numA + numB;
    }
}
var sumaResult2 = suma2(23, 57);
console.log('b:', sumaResult2);
// c
function validateInteger(num) {
    return isNaN(num) === false && parseInt(num) === Number(num);
}
console.log('c:', validateInteger(20), validateInteger(20.22))
// d
function suma3(numA, numB) {
    if (validateInteger(numA) === false) {
        alert('Error: numA is not integer:', numA, 'should be', Math.round(numA));
        return Math.round(numA);
    } else if (validateInteger(numB) === false) {
        alert('Error: numB is not integer:', numB, 'should be', Math.round(numB));
        return Math.round(numB);
    } else {
        return numA + numB;
    }
}
var sumaResult3 = suma3(23, 57);
console.log('d:', sumaResult3)
// e
function validateNumbers(numA, numB) {
    if (validateInteger(numA) === false) {
        alert('Error: numA is not integer:', numA, 'should be', Math.round(numA));
        return false;
    } else if (validateInteger(numB) === false) {
        alert('Error: numB is not integer:', numB, 'should be', Math.round(numB));
        return false;
    } else {
        return true;
    }
}
function suma4(numA, numB) {
    if (validateNumbers(numA, numB)) {
        return false;
    } else {
        return numA + numB;
    }
}
var sumaResult4 = suma4(23, 57);
console.log('e:', sumaResult4);