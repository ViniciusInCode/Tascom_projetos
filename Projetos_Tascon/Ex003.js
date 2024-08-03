//Crie um script que solicite ao usuário uma frase e conte o número de vogais na frase
const readlineSync = require('readline-sync');
function contarVogais(txt) {
    const vogais = [
        'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U', // Vogais básicas
        'á', 'é', 'í', 'ó', 'ú', 'Á', 'É', 'Í', 'Ó', 'Ú', // Acento agudo
        'à', 'è', 'ì', 'ò', 'ù', 'À', 'È', 'Ì', 'Ò', 'Ù', // Acento grave
        'â', 'ê', 'î', 'ô', 'û', 'Â', 'Ê', 'Î', 'Ô', 'Û', // Acento circunflexo
        'ã', 'õ', 'Ã', 'Õ'                                // Til
    ];
    let contador = 0;

    for (let char of txt) {
        if (vogais.includes(char)) {
            contador++;
        }
    }
    
    return contador

}

// let frase = readlineSync.question("Insira uma frase: ") // erro nas vogais com acento
// console.log(frase);

// console.log(contarVogais(frase));


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  readline.question(`Insira uma frase:`, name => {
    console.log(`Frase:${name}`);
    console.log(`Tem ${contarVogais(name)} vogais.`);
    readline.close()
  })