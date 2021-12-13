/*
Filter: função do array que permite filtrar elementos de um array
Utliza o callback para chegar um array e retornar os elementos que atendem determinada condição
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

console.log(alunos);

let alunosComMenosDe30 = alunos.filter((aluno) => aluno.idade < 30);
console.log(alunosComMenosDe30);

//fazendo a função filter 
function filtro(callback){
  let alunosFiltrados = []
  for (let aluno of alunos){
    if (callback(aluno)){
      alunosFiltrados.push(aluno)
    }
  }
  return alunosFiltrados
}
