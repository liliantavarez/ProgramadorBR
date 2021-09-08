function calcMedia(){
    return(this.notas[0]+this.notas[1])/2
}

var escola = new Object(); //criando objeto vazio

var aluno = { //criando obejto com as propriedades nome e notas
    nome:"Igor", //chave:valor,
    notas:[5.7,8.6],
    media: calcMedia //metado do objeto 
}

var aluno2 = {
    nome: "Jorges",
    notas:[7.8,2.5],
    media:calcMedia
}

aluno.matricula = 32323 //adicionando nova chave em um objeto ja criado
aluno["sobrenome"] = "Santos" //outra maneira de adicionar nova chave

console.log("Nome: "+aluno.nome)
console.log("Media: "+aluno.media())
console.log("Nome: "+aluno2.nome)
console.log("Media: "+aluno2.media())