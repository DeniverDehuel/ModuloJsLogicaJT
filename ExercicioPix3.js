const prompt = require('prompt-sync')();

let saldo = Number(prompt('Quanto de saldo tem na conta? '));
let valor = Number(prompt('Qual o valor do Pix? '));
let hora = Number(prompt('Qual a hora do Pix? '));

let limite = 5000;

if (hora >= 20 || hora <= 6) {
    limite = 1000;
}

if (valor <= 0) {
    console.log('Valor inválido');
} 

else if (valor > saldo) {
    console.log('Saldo insuficiente');
} 

else if (valor > limite) {
    console.log('Bloqueado: limite noturno');
} 

else {
    let saldoNovo = saldo - valor;
    console.log(`Pix enviado. Saldo: R$ ${saldoNovo.toFixed(2)}`);
}