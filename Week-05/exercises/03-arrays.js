//Arrays
    //a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
    //"Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).
    //b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
    //c. Agregar un elemento al principio y al final del array (utilizar unshift y push).
    //d.Quitar un elemento del principio y del final del array (utilizar shift y pop).
    //e. Invertir el orden del array (utilizar reverse).
    //f. Unir todos los elementos del array en un único string donde cada mes este separado por un 
    //guión - (utilizar//join).
    //g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
    // a
    var monthsA = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre",
     "Noviembre", "Diciembre"];
    console.log(monthsA[4], monthsA[10]);
    // b
    var monthsB = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre",
     "Noviembre", "Diciembre"];
    monthsB.sort();
    console.log(monthsB);
    // c
    var monthsC = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre",
     "Noviembre", "Diciembre"];
    monthsC.unshift('Start');
    monthsC.push('End');
    console.log(monthsC);
    // d
    var monthsD = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre",
     "Noviembre", "Diciembre"];
    monthsD.shift();
    monthsD.pop();
    console.log(monthsD);
    // e
    var monthsE = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre",
     "Noviembre", "Diciembre"];
    monthsE.reverse();
    console.log(monthsE);
    // f
    var monthsF = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre",
     "Noviembre", "Diciembre"];
    var allMonths = monthsF.join('-');
    console.log(allMonths);
    // g
    var monthsG = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre",
     "Noviembre", "Diciembre"];
    var slicedMonths = monthsG.slice(4, 11);
    console.log(slicedMonths);