let video = document.getElementById("amarelo");
let controle = document.getElementsByClassName("controle")[0];

function play() {
  video.play();
}

function pause() {
  video.pause();
}

function stop() {
  video.pause();
  video.currentTime = 0;
}

function aumenta() {
  video.volume += 0.1;
}

function diminui() {
  video.volume -= 0.1;
}

function volta() {
  video.currentTime -= 15;
}

function avanca() {
  video.currentTime += 15;
}

function exibir() {
  controle.setAttribute("style", "display:block");
}

function esconder(){
  controle.setAttribute("style", "display:none");
}
