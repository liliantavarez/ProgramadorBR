// // Importando modulo do node que permite a criação de arquivos

// let fs = require("fs");

// // Criando um arquivo e esquevendo algo nele
// fs.writeFile("teste.txt", "Hello World", (error) => {
//   if (error) throw error;
//   console.log("Arquivo criado com sucesso!");
// });

// // Edita o arquivo sem sobescrever os dados
//  fs.appendFile("teste.txt", " - Olá Mundo", (error) => {
//    if (error) throw error;
//    console.log("Arquivo atualizado com sucesso!");
// });

// // Apaga o arquivo
// fs.unlink("teste.txt", (error) => {
//   if (error) throw error;
//   console.log("Arquivo apagado com sucesso!");
// });

// //Renomea o arquivo
// fs.rename("teste.txt","novo nome.txt", (error) => {
//   if (error) throw error;
//   console.log("Arquivo renomeado com sucesso!");
// });

// //Realiza a leitura dos dados no arquivo no farmato passado por argumento
// fs.readFile("novo nome.txt","UTF8", (error,arquivo) => {
//   if (error) throw error;
//   console.log(arquivo);
// });


