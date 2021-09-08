var nota1 = 8.0;
var nota2 = 2.0;

var media = (nota1 + nota2) / 2;
var conceito = "";

if (media >= 8) {
  conceito = "Otimo";
} else if (media >= 6.5) {
  conceito = "Bom";
} else {
  conceito = "Regular";
}

//conceito = "Medio"; forçando o erro para entrar no default

console.log("Media: "+media)
//console.log("Conceito: "+conceito)

switch (conceito) {
  case "Otimo":
    console.log("Parabéns, voce é um otimo aluno");
    break;

  case "Bom":
    console.log("Voce esta quase perfeito");
    break;

  case "Regular":
    console.log("Estude mais um pouco!");
    break;

  default:
    console.log("ERRO");
    break;
}
