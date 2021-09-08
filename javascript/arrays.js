var alunos = ["Igor","Luiz","Mario","Jorge"];

for (const aluno of alunos) {//Pega o elemento 
    console.log(aluno)    
}

for (const aluno in alunos) {//pega o indice
    console.log(alunos[aluno]);
}

for (let i = 0; i < alunos.length; i++) {
    console.log(alunos[i]);
}
