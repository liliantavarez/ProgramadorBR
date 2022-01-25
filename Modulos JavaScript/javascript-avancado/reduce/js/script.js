/*
reduce: função que pega todo os valores de um array e retorna somente um resuldado
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

function idadeDaTurma(total, aluno) {
  return (total += aluno.idade);
}

console.log(alunos.reduce(idadeDaTurma, 0)); //soma a idade de todos os alunos
//função reduce recebe como argumeto a função e o valor inicial do retorno

console.log(
  alunos.reduce((todosNomes, aluno) => (todosNomes += aluno.nome), "")
);

console.log(
  alunos.reduce((mediaIdade, aluno) => (mediaIdade += aluno.idade),0)/alunos.length
);



