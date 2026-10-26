
function somaLinha(matriz, i) {
    let soma = 0;

    for (let j = 0; j < matriz[i].length; j++) {
        soma = soma + matriz[i][j];
    }

    return soma;
}

function somaTotal(matriz) {
    let total = 0;

    for (let i = 0; i < matriz.length; i++) {
        total = total + somaLinha(matriz, i);
    }

    return total;
}

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(somaLinha(matriz, 0));
console.log(somaTotal(matriz));
