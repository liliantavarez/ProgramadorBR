//Passando função como argumento de uma função

function ola() {
  console.log("Ola");
}

function saudacao(s,nome){
  s();
  console.log(nome)
}

saudacao(ola,"Lilian")

let usuarios = ["Luan","Carlos","Luana","Maria"]

function inserirUsuario(nome,callback){
  setTimeout(()=>{
    usuarios.push(nome)
    callback()
  },1000)
  
}

function listarUsuarios(){
  console.log(usuarios)
}

inserirUsuario("Carmem")
listarUsuarios()

// let dobro = function (n) {
//   return 2 * n;
// };

// console.log(dobro(6));
