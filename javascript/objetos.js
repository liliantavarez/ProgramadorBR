function calcMedia(){
    return(this.notas[0]+this.notas[1])/2
}

var aluno = {
    nome:"Igor",
    notas:[5.7,8.6],
    media: calcMedia
}

console.log(aluno.nome)
console.log(aluno.media())
