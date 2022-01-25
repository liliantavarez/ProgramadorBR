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

//Array Function, com um unico argumento (uso de () tornace opcional) 
//e somente retornado um valor (o que torna o uso de {} opcional)
let dobro3 = x => 2 * x;

console.log(dobro3(6));

//Array Funtion são mais simples de declarar e faceis de usar
//porem ela não entede o 'this' nem o 'bind'

let thisNaArrowFun = () => {console.log(this)}

let thisNaFuncao = function() {
  console.log(this)
}

let objFun = {
  x: 8,
  fun: thisNaFuncao
}

let objarrowFun = {
  x: 8,
  fun: thisNaArrowFun
}

objFun.fun() //retorna o objeto, pois este é o conteto
objarrowFun.fun()//retorna o objeto globo como sendo o this, pq perde o contexto na arrow function 
 
objarrowFun.fun = thisNaArrowFun.bind(objarrowFun)//o metado bind tambem não funciona nas arrows functions
