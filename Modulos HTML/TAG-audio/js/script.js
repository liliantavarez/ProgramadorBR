let musica = document.getElementById("audio");
let controle = document.getElementsByClassName("controle")[0];

function play() {
  musica.play();
}

function pause() {
  musica.pause();
}

function stop() {
  musica.pause();
  musica.currentTime = 0;
}

function aumenta() {
  musica.volume += 0.1;
}

function diminui() {
  musica.volume -= 0.1;
}


function exibir() {
  controle.setAttribute("style", "display:block");
}

function esconder(){
  controle.setAttribute("style", "display:none");
}