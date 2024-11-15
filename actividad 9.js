// ingrese una edad
let edad = parseInt(prompt("Ingresa tu edad:"));

// Verificar la categoría según la edad
if (edad < 13) {
    console.log("Eres un niño.");
} else if (edad >= 13 && edad <= 17) {
    console.log("Eres un adolescente.");
} else if (edad >= 18 && edad <= 110) {
    console.log("Eres un adulto.");
} else {
    console.log("No es una edad válida.");
}
