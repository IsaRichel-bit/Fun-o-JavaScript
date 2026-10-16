
function contarPares(vet) {
    let contador = 0;

    for (let i = 0; i < vet.length; i++) {
        if (vet[i] % 2 == 0) {
            contador++;
        }
    }

    return contador;
}

let vet = [1, 2, 4, 7, 8, 9];

console.log(contarPares(vet));
