//maneiras de acessar e modificar o HTML atraves do JS

document.body.innerHTML = "<h1>Ola Mundo" + document.body.innerHTML;
document.head.innerHTML = "<title>JavaScrip - Intermediario" 

//acessando qualquer elemento do HTML

let p1 = document.getElementById("p1"); //atraves do ID da TAG
console.log(p1);
console.log("")
p1.innerHTML = "<b> Muda o texto e aceita tags HTML"
p1.innerText = "Muda somente o texto"
p1.textContent = "Muda o texto"

let paragrafos = document.getElementsByClassName("paragrafo"); //atraves do nome da CLASS
console.log(paragrafos);
for (const p of paragrafos) {
    console.log(p)
}
console.log("")

let tagP = document.getElementsByTagName("p") //através da nome da TAG

for (const p of tagP) {
    console.log(p)
}

