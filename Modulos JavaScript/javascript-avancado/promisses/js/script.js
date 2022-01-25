/*
Promise: Um objeto que recebe como argumento uma função(), uma maneira mais nova e melhor de usar o callback
*/
let usuarios = ["Luan", "Carlos", "Luana", "Maria"];

let inserirUsuario = (nome) => {
  let promise = new Promise(function (resolve, reject) {
    //criando promise, é um objeto que recebe como argumento uma função com os argumentos "resolve" e "reject"
    setTimeout(() => {
      usuarios.push(nome); //insere o usuario
      let error = true; //variavel para verificar a existencia de algum erro

      if (!error) {
        resolve(); //a função só sera executada se não ouver nenhum erro
      } else {
        reject({ msg: "Erro na inserção de usuario" });
      }
    }, 1000);
  });
  return promise;
};

let listarUsuarios = () => {
  console.log(usuarios);
};

inserirUsuario("Carmem")
  .then(listarUsuarios) //a função do .then() só é executa quando der resolve(quando a função for executada)
  .catch((error) => {
    //função que exibe o erro caso aconteca
    console.log(error.msg);
  });
