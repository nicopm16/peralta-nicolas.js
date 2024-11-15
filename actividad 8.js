// ingrese un año
let anio = parseInt(prompt("Ingrese un año:"));

// Función que determina si el año es bisiesto
function esBisiesto(anio) {
    return (anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0);
}

// Verificar si el año es bisiesto y muestra el resultado
if (esBisiesto(anio)) {
    console.log("El año ingresado es bisiesto.");
} else {
    console.log("El año ingresado no es bisiesto.");
}
