//Passando função como argumento de uma função

function ola() {
  console.log("Olá");
}

function tchau() {
  console.log("Tchau");
}

function saudacao(s, nome) {
  //a função recebera como atributo a função de saudação e um nome
  s(); //executando a função que foi recebida
  console.log(nome);
}

saudacao(ola, "Lilian"); //passando como argumento da função, a função ola() e o nome
saudacao(tchau, "Lilian"); //passando como argumento da função, a função tchau() e o nome

let usuarios = ["Adriano", "Marcia", "Jose"];

function inserirUsuario(nome) {
  usuarios.push(nome);
}

function listarUsuarios() {
  console.log(usuarios);
}

inserirUsuario("Lilian");
listarUsuarios();

//Usando a função de listar usuarios com CallBack 

function inserirUsuarioComCallBack(nome,callback){//recebe como argumento o nome que sera inserido e a função de listar os nomes 
  setTimeout(()=>{
    usuarios.push(nome)//o nome sera inserido 
    callback()//a função que de lista os nomes sera executada somente depois que o usuario for inserido com o callback de 1s
  },1000)//defenindo o tempo de espera 

}

inserirUsuarioComCallBack("Laura",listarUsuarios)