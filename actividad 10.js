// ingrese un color
let color = prompt("Ingresa un color:").toLowerCase(); // Convertir a minúsculas para evitar problemas de coincidencia

// Usa un switch para determinar el color correspondiente
switch (color) {
    case "azul":
        console.log("blue");
        break;
    case "rojo":
        console.log("red");
        break;
    case "verde":
        console.log("green");
        break;
    case "naranja":
        console.log("orange");
        break;
    case "amarillo":
        console.log("yellow");
        break;
    default:
        console.log("Color not found");
        break;
}