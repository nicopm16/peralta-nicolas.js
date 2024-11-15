// ingresa el primer string y guardarlo en una variable
let string1 = prompt("Ingresa el primer string:");

// ingresa el segundo string y guardarlo en otra variable
let string2 = prompt("Ingresa el segundo string:");

// Comparar ambos strings
let sonIguales = string1 === string2;

// Comparar la longitud de ambos strings
let mismaLongitud = string1.length === string2.length;

console.log("Los strings son iguales: " + sonIguales);
console.log("Los strings tienen la misma longitud: " + mismaLongitud);
