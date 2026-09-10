function calcularPromedio(numeros) {
    let suma = 0;

    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }

    return suma / numeros.length;
}

const valores = [67, 35, 15, 67];

console.log("Promedio:", calcularPromedio(valores));
