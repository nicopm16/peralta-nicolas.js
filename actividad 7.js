// ingrese dos números
let numero1 = parseFloat(prompt("Ingrese el primer número:"));
let numero2 = parseFloat(prompt("Ingrese el segundo número:"));

// Determinar cuál es el número mayor
if (numero1 > numero2) {
    console.log("El número mayor es: " + numero1);
} else if (numero2 > numero1) {
    console.log("El número mayor es: " + numero2);
} else {
    console.log("Ambos números son iguales.");
}
