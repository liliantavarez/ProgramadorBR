/*
MAP: Cria um novo array em cima dos elementos do array principal
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

// function nomeIdade(aluno){
//   return `${aluno.nome} tem: ${aluno.idade}`
// }

// console.log(alunos.map(nomeIdade))

console.log(alunos.map((aluno) => `${aluno.nome} tem: ${aluno.idade}`));

