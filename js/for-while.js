var numero = 5;

for (var i = 0; i < numero; i++) {
  console.log("Executando o for " + (i + 1));
}

console.log("Fim do for");

numero = Math.random() * 100;

while (numero < 90) {
  console.log("Numero: " + numero);
  numero = Math.random() * 100;
}
console.log("Fim do while");
