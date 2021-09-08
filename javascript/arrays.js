var alunos = ["Igor","Luiz","Mario","Jorge"];

console.log(alunos)

for (var aluno of alunos) {//Pega o elemento 
    console.log(aluno)    
}
console.log("")
for (var aluno in alunos) {//pega o indice
    console.log("Aluno "+(aluno)+": "+alunos[aluno]);
}
console.log("")
for (var i = 0; i < alunos.length; i++) {
    console.log("Aluno "+(i+1)+": "+alunos[i]);
}
