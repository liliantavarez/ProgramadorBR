let tela = document.getElementById("tela");

let ctxt = tela.getContext("2d");

ctxt.lineWidth = 3; //Largura da linha

//Desenhando linhas

ctxt.moveTo(0, 0);
ctxt.lineTo(250, 250);
ctxt.lineTo(500, 0);
ctxt.stroke();

//Desenhando Retangulos

//Retangulo Preenchido
ctxt.beginPath();

ctxt.fillStyle = "blue";
ctxt.fillRect(10, 260, 100, 200);

//Retangulo Vazio
ctxt.strokeStyle = "red";
ctxt.strokeRect(120, 260, 100, 200);

//Retangulo Preenchido e com borda

ctxt.rect(230, 260, 100, 200);
ctxt.fill();
ctxt.stroke();

ctxt.clearRect(240, 270, 30, 30);

ctxt.beginPath(); //usar pra iniciar uma nova linha

ctxt.lineWidth = 4;
ctxt.strokeStyle = "red";
ctxt.moveTo(0, 0);
ctxt.lineTo(200, 100);
ctxt.stroke();

ctxt.beginPath();

ctxt.lineWidth = 7;
ctxt.strokeStyle = "blue";
ctxt.fillStyle = "red";

ctxt.moveTo(250, 0);
ctxt.lineTo(400, 200);
ctxt.lineTo(200, 100);
ctxt.closePath(); //Fecha o caminho
ctxt.fill();
ctxt.stroke();


//Desenhando circulos/arcos 

let x = 400;
let y = 350;
let raio = 50;
let inicio = 0;
let fim = 2 * Math.PI;

ctxt.beginPath();

ctxt.arc(x, y, raio, inicio, fim);

ctxt.fill()
ctxt.stroke()