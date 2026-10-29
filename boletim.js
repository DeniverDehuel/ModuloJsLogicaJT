
// const aluno1 = "Gabriel";
// const media1 = 8;

// if(media1 >= 7){
//     console.log("Aprovado")
// } else {
//     console.log ("Reprovado")
// }

// const aluno2 = "João";
// const media2 = 7;

// if(media2 >= 7){
//     console.log("Aprovado")
// } else {
//     console.log ("Reprovado")
// }

// const aluno3 = "Pedro";
// const media3 = 5;

// if(media3 >= 7){
//     console.log("Aprovado")
// } else {
//     console.log ("Reprovado")
// }

// const aluno4 = "Maria";
// const media4 = 9;

// if(media4 >= 7){
//     console.log("Aprovado")
// } else {
//     console.log ("Reprovado")
// }

// const aluno5 = "Fabricia";
// const media5 = 4;

// if(media5 >= 7){
//     console.log("Aprovado")
// } else {
//     console.log ("Reprovado")
// }

// const aluno6 = "Larissa";
// const media6 = 10;

// if(media6 >= 7){
//     console.log("Aprovado")
// } else {
//     console.log ("Reprovado")
// }
// ----------------------------------------------------------------------------------
// // 1. Criar uma lista (array) contendo todos os alunos e suas respectivas médias
// const turma = [
//     { nome: "Gabriel", media: 8 },
//     { nome: "João", media: 7 },
//     { nome: "Pedro", media: 5 },
//     { nome: "Maria", media: 9 },
//     { nome: "Fabricia", media: 4 },
//     { nome: "Larissa", media: 10 }
// ];

// // 2. Usamos um loop (for...of) para percorrer cada aluno da lista de forma automática
// for (const aluno of turma) {
//     // O bloco de if/else agora é escrito apenas uma única vez aqui dentro
//     if (aluno.media >= 7) {
//         console.log(aluno.nome + " - Aprovado");
//     } else {
//         console.log(aluno.nome + " - Reprovado");
//     }   
// }
//--------------------------------------------------------------------

// const medias = [7, 8, 9, 4, 5, 7.6]
// const nomes = ["Ana", "Bruno", "Carla", "Diego", "Elisa", "Fabio"]

// // console.log("Alunos: " + nomes[3] + " Média: " + medias[3])
// for (let i = 0; i < medias.length; i++) {
//     if (medias[i] >= 7) {
//         console.log(nomes[i] + " Aprovado")
//     } else {
//         console.log (nomes[i] + " Reprovado")
//     }
// }

//------------------------------------------------------------------------------------------------------------
// Começe com uma const de medias = [] e use o while para pedir medias ate a pessoa digitar -1 (pesquise push)
// Depois, aprovados e média.

const promtp = require("prompt-sync")

const medias = []
let input;
let aprovados = 0
let soma = 0

while (input != -1){ // enquanto o input for diferente (!=) de -1 vai seguir o loop.
    input = Number(promtp("Próxima Média: "))
    medias.push(input) // push adiciona uma informação no final da fila.
    if(input != -1){
        medias.push(input)
    }
}
for (let i = 0; i < medias.length; i++) {
    if (medias[i] >= 7) {
        console.log(nomes[i] + " Aprovado")
    } else {
        console.log (nomes[i] + " Reprovado")
    }
}