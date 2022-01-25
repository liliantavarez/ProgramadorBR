/*
MAP: Cria um novo array criado em cima dos elementos do array principal
*/

function novoAluno(nome, idade) {
  return { nome, idade };
}

let alunos = [
  novoAluno("Mario", 23),
  novoAluno("Jose", 45),
  novoAluno("Marcia", 29),
  novoAluno("João", 35),
];


console.log(alunos.map((aluno) => `${aluno.nome} tem: ${aluno.idade}`));


function nomeIdade(aluno){//criando uma funçao que concaneta o nome e a idade do aluno
  return `${aluno.nome} tem: ${aluno.idade} anos`
}

console.log(alunos.map(nomeIdade))