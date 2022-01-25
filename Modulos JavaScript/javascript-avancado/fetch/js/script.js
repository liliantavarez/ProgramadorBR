/*pegando dados dinamicos, usando API 
API: qualquer interface entre 2 sistemas
*/
let url = "https://economia.awesomeapi.com.br/last/USD-BRL";

let converter = () => {
  let valor = document.getElementById("valor").value;

  fetch(url) //retorna uma promise
  .then((res) => {
    return res.json(); //converte para o formato JSON e retorna uma outra promise
  })
  .then((data) => {
    let h1 = document.getElementById('resultado')
    let resultado = valor * data.USDBRL.ask;
    h1.innerHTML = `${valor} reais em dolar é: ${resultado}`

    });
};
