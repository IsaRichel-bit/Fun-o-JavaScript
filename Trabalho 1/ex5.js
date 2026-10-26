
function inverter(vet) {
    let inicio = 0;
    let fim = vet.length - 1;

    while (inicio < fim) {
        let aux = vet[inicio];
        vet[inicio] = vet[fim];
        vet[fim] = aux;

        inicio++;
        fim--;
    }
}

let vet = [1, 2, 3, 4, 5];

console.log("Antes:", vet);
inverter(vet);
console.log("Depois:", vet);
