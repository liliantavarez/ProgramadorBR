//criando uma função de nome "media" com os argumentos "nota1 e nota2"
function media(nota1, nota2) {
  var media = (nota1 + nota2) / 2;
  //console.log(media);
  return media; //função com retorno
}

var resultado1 = media(6, 7); //chamando a função e passando os argumentos
var m = media; //criando uma variavel e atribuindo a ela a função

var resultado2 = m(2, 5); //usando a função pela variavel

console.log(resultado1);
console.log(resultado2);

//criando uma função anonima! que permite colocar uma função dentro de uma variavel
var media = function (n1, n2) {
  return (n1 + n2) / 2;
};

console.log(media(10, 5));
