//Criar um sistema com nome, notas, media e conceito de um aluno!

var alunos = ["João", "Mario", "Camila", "Rosa"];
var primeiraNota = [9.2, 7.6, 8.9, 7.6];
var segundaNota = [7.8, 9.5, 2.5, 7.9];
var medias = [];

function media(nota1, nota2) {
  return (nota1 + nota2) / 2;
}

function situacao(media){
    if(media>7){
        return "Aprovado"
    }else{
        return "Reprovado"
    }
}

function conceito(media){
    if (media >= 8) {
        return "Otimo";
      } else if (media >= 6.5) {
        return "Bom";
      } else {
        return "Regular";
      }
}

for (var i in alunos) {
  medias[i] = media(primeiraNota[i], segundaNota[i]);

  console.log("ALUNO(A): " + alunos[i]+
  "\nNOTA 1: " + primeiraNota[i]+
  "\nNOTA 2: " + segundaNota[i]+
  "\nMEDIA: " + medias[i]+
  "\nCONCEITO: " + conceito(medias[i])+
  "\nSITUAÇÃO: "+situacao(medias[i]))
}

