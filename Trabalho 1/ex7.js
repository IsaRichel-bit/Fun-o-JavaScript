
function mediaTurma(turma) {
    let soma = 0;

    for (let i = 0; i < turma.length; i++) {
        soma = soma + turma[i].nota;
    }

    return soma / turma.length;
}

let turma = [
    { nome: "Ana", nota: 8 },
    { nome: "Bia", nota: 6 },
    { nome: "Carlos", nota: 10 }
];

console.log(mediaTurma(turma));
