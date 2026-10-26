const prompt = require('prompt-sync')();
let saldo = Number(prompt('Quanto de saldo tem na conta? '));
let valor = Number(prompt('Qual o valor do Pix?'))
let hora = Number(prompt('Qual a hora do Pix? '))
let limite = 5000; 

if (hora >= 20) {
    limite = 1000
}
if (valor > limite) {
    console.log('Pix bloqueado, limite noturno atingido')
}
if (valor < saldo) {
    console.log('Pix Realizado com sucesso! seu saldo é de: R$ ' ,(saldo - valor))
}

    else { 
        valor > saldo
        console.log('Pix Bloqueado, saldo insuficiente.')
}
