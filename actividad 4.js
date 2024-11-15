// ingrese un número y guardarlo en una variable
let numero = parseFloat(prompt("Ingresa un número:"));

// Función que verifica si un número es divisible por 5
function esDivisiblePor5(num) {
    return num % 5 === 0;
}

// Llama a la función y muestra el resultado
let resultado = esDivisiblePor5(numero);
console.log("El número " + numero + " es divisible por 5: " + resultado);
