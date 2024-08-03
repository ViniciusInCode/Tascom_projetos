//Faça um algoritmo que leia os valores de A, B, C e em seguida imprima na tela a soma entre A e B é mostre se a soma é menor que C.

const readlineSync = require('readline-sync');

function Comparar_valores (a,b,c){
    
    let soma = a + b;

    if (soma === c){
        return console.log(`A soma de ${a} e ${b} é Igual a ${c}.`);
    } else if (soma < c) {
        return console.log(`A soma de ${a} e ${b} é Menor a ${c}.`);
    } else {
        return console.log(`A soma de ${a} e ${b} é Maior a ${c}`);
    }
}

let num1 = readlineSync.questionInt("Insira o numero A:")
let num2 = readlineSync.questionInt("Insira o numero B:")
let num3 = readlineSync.questionInt("Insira o numero C:")

Comparar_valores(num1,num2,num3)

