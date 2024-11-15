// Pedir los tres ángulos internos del triángulo
let angulo1 = parseFloat(prompt("Ingrese el primer ángulo del triángulo:"));
let angulo2 = parseFloat(prompt("Ingrese el segundo ángulo del triángulo:"));
let angulo3 = parseFloat(prompt("Ingrese el tercer ángulo del triángulo:"));

// Función que determina si el triángulo es válido
function esTrianguloValido(a1, a2, a3) {
    return (a1 + a2 + a3 === 180) && (a1 > 0 && a2 > 0 && a3 > 0);
}

// Llamar a la función y mostrar el resultado
let valido = esTrianguloValido(angulo1, angulo2, angulo3);

if (valido) {
    console.log("El triángulo es válido.");
} else {
    console.log("El triángulo no es válido.");
}
