//Crie um objeto que represente um livro com propriedades titulo , autor e ano . Em seguida, exiba essas informações.

//O OBJETO Livro recebe como Propriedades Titulo,Autor,Ano.

const livro = {
    titulo: "A Arte da guerra",
    autor: "Sun Tzu",
    ano:"544 a.C",
}

//O método Dir() Imprime todas as Propriedades do objeto 
console.dir(livro, {depth: 2})
console.log(livro.titulo);
console.log(livro.autor);
console.log(livro.ano);


