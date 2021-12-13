/*
Promise: Um objeto que recebe como argumento uma função()
*/
let usuarios = ["Luan", "Carlos", "Luana", "Maria"];

let  inserirUsuario = (nome) => {
  let promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
      usuarios.push(nome);
      let error = false;

      if (!error) {
        resolve();
      } else {
        reject({ msg: "Erro de execução" });
      }
    }, 1000);
  });
  return promise;
}
let listarUsuarios = () => {
  console.log(usuarios);
}

inserirUsuario("Carmem")
  .then(listarUsuarios)//só executa quando der resolve(quando a função for executada)
  .catch((error) => { //função que exibe o erro caso aconteca 
    console.log(error.msg);
  });
