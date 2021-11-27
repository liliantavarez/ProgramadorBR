//Passando função como argumento de uma função

let usuarios = ["Luan", "Carlos", "Luana", "Maria"];

function inserirUsuario(nome) {
  let promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
      usuarios.push(nome);
      let error = false;

      if (!error) {
        resolve();
      } else {
        reject({ msg: "Erro" });
      }
    }, 1000);
  });
  return promise;
}

function listarUsuarios() {
  console.log(usuarios);
}

inserirUsuario("Carmem")
  .then(listarUsuarios)
  .catch((error) => {
    console.log(error.msg);
  });
