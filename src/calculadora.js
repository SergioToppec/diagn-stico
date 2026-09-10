function calcularPromedio(numeros) {
    let suma = 0;

    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }

    return suma / numeros.length;
}

const valores = [10, 35, 15, 40];

console.log("Promedio:", calcularPromedio(valores));
