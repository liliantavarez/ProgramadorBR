let lista1 = $("#lista1");

lista1.find(".item2").hide(); //Busca todos os elementos de determinado seletor

lista1.children().fadeOut(3000); //Retorna todos os filhos

let body = $("body");
console.log(body.children("ul"));
