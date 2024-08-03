//Crie uma função que solicite ao usuário cinco nomes, armazene-os em um array e depois exiba os nomes em ordem alfabética.

// Importando o readline-sync para fazer o usuário inserir dados pelo terminal 
const readlineSync = require('readline-sync');

//Declarando a função ordenar_nomes 
function ordenar_nomes(){
    let nomes = []; // criando o array vazio que vai receber os nomes 

    //for que vai repetir 5x para pedir os nomes  usando 
    for (let i = 0; i < 5; i++) {
        let nome = readlineSync.question(`Digite o nome ${i + 1}: `)
        nomes.push(nome);
    }

    nomes.sort();//Coloca os nomes em ordem alfabética 

    console.log('Nomes em ordem alfabética:');
    nomes.forEach(nome => {
        console.log(nome);
    });
    
    return 
}

ordenar_nomes()