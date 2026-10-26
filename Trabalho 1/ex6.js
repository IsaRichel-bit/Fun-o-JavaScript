
function dobrar(n) {
    return n * 2;
}

let numero = 5;

console.log("Original:", numero);
console.log("Dobrado:", dobrar(numero));
console.log("Original depois:", numero);

// O número original não muda porque a função
// recebe uma cópia do valor.
