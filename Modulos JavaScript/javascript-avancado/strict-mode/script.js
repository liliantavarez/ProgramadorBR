"use strict" //vaz com que seja obrigatorio declarar as variaveis 
//uma variavel criada no escopo da função ela so faz parte desta função

let x2 = 2 //variavel global

function imprimir(){
    let x = 7; //variavel local
    console.log(x)
}

imprimir() 
console.log(x2)
console.log(window)