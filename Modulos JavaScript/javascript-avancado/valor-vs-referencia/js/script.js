/*
atribuição por valor: faz uma copia do elemento original, e qualquer alteração na copia 
não vai refletir no original
atribuição por referencia: não faz copia, é como se desse um novo valor para o objeto original
qualquer modificação no novo elemento altera tambem o original 
*/

let alunoA = {
  nome: "Igor",
  idade: 15,
};

let alunoB = alunoA;

alunoB.idade = 25; //alera tambem o valor de alunoA, pois alunoB é uma referencia a alunoA

console.log(alunoB);
console.log(alunoA);

let idadeA = 15;
let idadeB = idadeA; //idadeB recebe somente o valor de idadeA, pois não esta fazendo referencia a variavel por ser do tipo primitivo
idadeB = 10;

console.log(idadeB);
console.log(idadeA);

let turmaA = ["Igor", "Jose", "Paulo"];
let turmaB = turmaA;

turmaB.push("João"); //altera tambem a turmaA pois um array tem atribuição por referencia

console.log(turmaA)
console.log(turmaB)

//fazer copias/clones de obejtos e arrays para faazer alteraçoes sem interferencia no original

let turmaC = [...turmaA] //faz uma copia dos valores de turmaA para turmaC
turmaC.push('Marcia')

console.log(turmaA)
console.log(turmaC)

let alunoC = {...alunoA} //criando uma copia do objeto alunoA
alunoC.idade = 5 //altera o valor somente do alunoC pois ele é uma copia do alunoA e não uma referencia

console.log(alunoA)
console.log(alunoC)
