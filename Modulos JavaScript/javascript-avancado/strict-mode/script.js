"use-strict"; //Faz com que seja obrigatorio declarar as variaveis
//uma variavel criada no escopo da função ela so faz parte desta função

var x = 7; //VAR define a variavel de escopo GLOBAL, utilizar a palavra VAR no JS é opcional
var x2 = 2; //variavel global pode ser acessada de qualquer lugar do programa

console.log(x);

function imprimir() {
  var xFun = 8; //Toda variavel local pode ser acessada apenas no escopo que ela foi criada, nesse caso xFun só pode ser acessada na função
  console.log(xFun);
  y = 10; //Se o tipo de variavel não for definada o JS cria ela de forma global no objeto Windows
  console.log(x2); //acessando variavel global dentro da função
  console.log(y)
}

imprimir();
console.log(xFun); //Não é possivel acessar essa variavel pois ela foi criada dentro da função e esse é seu escopo
console.log(y); //passa a ser inacessivel com o uso do "use strict"
