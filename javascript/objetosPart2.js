//varial recebendo uma função anonima que calcula a media
var calcMedia = function () {
  return (this.nota1 + this.nota2) / 2;
};

//Criando objetos atraves de uma função
function criarAluno(nomeAluno, n1, n2) {
  return {
    nome: nomeAluno,
    nota1: n1,
    nota2: n2,
    media: calcMedia,
  };
}

var alunoFunc = criarAluno("Fernanda", 8, 4);
console.log(alunoFunc);
console.log("Nome: " + alunoFunc.nome+"\nMedia: " + alunoFunc.media());
console.log("");

//Criando objetos atraves de um construtor;
function Aluno(alunoNome, primeiraNota, segundaNota) {
  this.nome = alunoNome;
  this.nota1 = primeiraNota;
  this.nota2 = segundaNota;
  this.media = calcMedia;
}

var novoAluno = new Aluno("Lilian", 8, 9);
console.log(novoAluno);
console.log("Nome: " + novoAluno.nome+"\nMedia: " + novoAluno.media());
console.log("");

//criando objeto dentro de uma variavel
var aluno = {
  nome: "Lucas",
  nota1: 6,
  nota2: 8,
  media: calcMedia,
};

console.log(aluno);
console.log("Nome: "+aluno.nome+"\nMedia: "+aluno.media())
console.log()
console.log("")

//array de objetos
var turma = [
  {
    nome: "Igor",
    nota1: 9,
    nota2: 7,
    media: calcMedia,
  },
  {
    nome: "Jose",
    nota1: 4,
    nota2: 8,
    media: calcMedia,
  },
  {
    nome: "Maria",
    nota1: 7,
    nota2: 9,
    media: calcMedia,
  },
];

//varrendo array e exibindo seus elementos 
turma.forEach(element => {
    console.log("Nome: "+element.nome+"\nMedia: "+element.media())
});

//var alunoTurma = turma[0];
//console.log(alunoTurma);
//console.log(alunoTurma.media());
