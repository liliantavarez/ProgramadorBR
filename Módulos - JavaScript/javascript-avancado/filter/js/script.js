/*
Filter: função do array que permite filtrar elementos de um array
Utliza o callback para checar  um array e retornar os elementos que atendem determinada condição
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

let alunosComMenosDe30 = alunos.filter((aluno) => aluno.idade < 30); //retorna um novo array com os elementos que atendem a condição definida
console.log(alunosComMenosDe30);

for (const aluno of alunosComMenosDe30) {
  console.log(aluno.nome)
}

//fazendo a função filter 
function temMaisDe30(aluno){
  return aluno.idade > 30
}

function filtro(callback){
  let alunosFiltrados = []
  for (let aluno of alunos){
    if (callback(aluno)){
      alunosFiltrados.push(aluno)
    }
  }
  return alunosFiltrados
}

console.log(filtro(temMaisDe30))

