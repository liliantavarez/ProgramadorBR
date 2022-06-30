let tela = document.getElementById("tela")
let ctxt = tela.getContext("2d")

let img = new Image()
img.src = "./imagens/exemplo.jpg"
img.onload = desenharImg

function desenharImg(){
    ctxt.drawImage(this, 40,40, )
}
