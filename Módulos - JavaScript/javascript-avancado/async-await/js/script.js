/*
async await:
uma outra maneira de utilizar uma promise 
*/
let usuarios = ["Luan", "Carlos", "Luana", "Maria"];

let inserirUsuario = (nome) => {
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
};
let listarUsuarios = () => {
  console.log(usuarios);
};

async function executar() { //criando uma função do tipo async
  await inserirUsuario("Marcela"); //await: faz com que o programa fique esperando ate que a promise seja executada
  listarUsuarios(); //executa somente depois do await
}

executar();
