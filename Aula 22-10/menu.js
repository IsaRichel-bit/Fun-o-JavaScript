const prompt = require("prompt-sync")()
// exibi menu
function exibeMenu(){
    console.log("### Menu de Opções")
    console.log("1. Inseri um Aluno")
    console.log("2. Exibir")
    console.log("3. Inserir Notas")
    console.log("0. Sair")
    return parseInt(prompt("Digite uma Opção:"))
}
function exibir(alunos){
    if (alunos.length == 0){
        console.log("Nenhum aluno encontrado")
        return // sai da função
    }
    for(let i=0; i < alunos.length; i++){
        console.log[i+1,".",alunos[i].nome,".",alunos[i].nota]
    }
}
function inserir(alunos){
    let nome = prompt("Informe nome do aluno")
    let nota = parseFloat(promp("Informe nota do aluno"))
    // insere objeto no vetor
    alunos[alunos.length] = {
        nome: nome,
        nota: nota
    }
}
function main(){
    // criar vetor central
    let alunos = [
        {nome: "Ana", nota: 8.5},
        {nome: "Bruno", nota: 6.0},
        {nome: "Carla", nota: 9.2},
    ]
    let opcao
    do{
        opcao = exibeMenu()
            switch(opcao){
                case 1: break
                case 2: exibir(alunos);break
                case 0: console.log("Programa Encerrado")
                default: console.log("Opção Invalida")
            }
        }
        while (opcao !=0)
    }