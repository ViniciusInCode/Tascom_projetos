//Faça um algoritmo que gere um valor aleatório de 1 a 100, e caso o valor seja maior que 80, jogue uma mensagem na tela avisando que o usuário sorteou um número alto e mostre o número. Caso contrário, avise o usuário que é um número baixo e também mostre o número sorteado.

const readlineSync = require('readline-sync');

let num = readlineSync.questionInt("Insira um numero: ")

let random = Math.floor(Math.random() * 100) + 1;

if (random < num){
    console.log(`O numero sorteado é Menor que ${num}`);
    console.log("Numero sorteado:" + random);
    
} else if (random > num) {
    console.log(`O numero sorteado é Maior que ${num}`);
    console.log("Numero sorteado:" + random);
} else {
    console.log(`O numero sorteado é Igual que ${num}`);
    console.log("Numero sorteado:" + random);
}
