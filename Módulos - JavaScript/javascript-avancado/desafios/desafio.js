//Criar funçoes que repliquem o comportamento das funçoes MAP e REDUCE

function novoAluno(nome, idade) {
  return { nome, idade };
}

let alunos = [
  novoAluno("Mario", 23),
  novoAluno("Jose", 45),
  novoAluno("Marcia", 29),
  novoAluno("João", 35),
];

function map() {
  var map = [];
  for (const aluno of alunos) {
    map.push(`O aluno, ${aluno.nome} tem ${aluno.idade} anos`);
  }
  console.log(map);
}

map();

function somaIdade() {
  var somaIdade = 0;
  for (const aluno of alunos) {
    somaIdade += aluno.idade;
  }
  return somaIdade;
}

console.log(somaIdade());

function mediaIdade() {
  var somaIdade = 0;
  for (const aluno of alunos) {
    somaIdade += aluno.idade;
  }
  return somaIdade / alunos.length;
}

console.log(mediaIdade());

function concatenarNomes() {
  var nomesJuntos = "";
  for (const aluno of alunos) {
    nomesJuntos += aluno.nome;
  }
  return nomesJuntos;
}

console.log(concatenarNomes());
