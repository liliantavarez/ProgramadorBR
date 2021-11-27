//Função Padrão
function dobro(x) {
  console.log(2 * x);
}

dobro(3);

//Função Anonima
let dobro2 = function (x) {
  console.log(2 * x);
};

dobro2(5);

//Array Function, com um unico argumento e somente retornado um valor
let dobro3 = x => 2 * x;
 
console.log(dobro3(6));

//Array Funtion são mais simples de declarar e faceis de usar, porem ela não entede o 'this' nem o 'bind'
