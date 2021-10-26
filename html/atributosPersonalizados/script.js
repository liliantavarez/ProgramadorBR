//PARTE 2//

let lista = document.getElementById("lista");
lista.dataset.num = "15"
let numero = parseInt(lista.dataset.num);

let id = lista.dataset.id
console.log(id)

console.log(lista.dataset.num);

let conteudo = "";

for (let index = 1; index <= numero; index++) {
  conteudo += "<li>" + index + "</li>";
}

lista.innerHTML = conteudo;

//PARTE 1 //

let img = document.getElementById("like");

img.addEventListener("click", function () {
  let lestImg = img.getAttribute("src");
  img.setAttribute("src", "./imagens/thumbs-down.png");

  console.log(lestImg);

  img.setAttribute("cor", "vermelho"); //criando uma atributo aleatorio
});
