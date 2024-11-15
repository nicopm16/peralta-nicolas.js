// ingrese la temperatura en grados Fahrenheit
let fahrenheit = parseFloat(prompt("Ingrese la temperatura en grados Fahrenheit:"));

// Función que convierte Fahrenheit a Celsius
function fahrenheitACelsius(f) {
    return (f - 32) * 5 / 9;
}

// Llamar a la función y obtener el resultado
let celsius = fahrenheitACelsius(fahrenheit);

// Mostrar el resultado
console.log("La temperatura en grados Celsius es: " + celsius.toFixed(2));
