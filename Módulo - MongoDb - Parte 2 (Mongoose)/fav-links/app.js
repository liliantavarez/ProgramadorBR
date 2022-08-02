const express = require("express");
const app = express();
const port = 3000;
const linkRouter = require("./routers/linkRouter");
const mongoose = require("mongoose");

/* Conexão com o banco de dados */
mongoose.connect("mongodb://localhost/links");
let db = mongoose.connection;

db.on("error", () => {
  console.log("Houve um erro!");
});

db.once("open", () => {
  console.log("Banco Carregado..");
});

/* Rotas */
app.use("/", linkRouter);
app.get("/", (req, res) => res.send("Hello Word"));

app.listen(port, () => {
  console.log("Servidor rodando....");
});

/* 
Criando novo documento que sera inserido na coleção 
let link = new Link({
  title: "Twitter",
  description: "Link para o twitter",
  url: "https://twitter.com/liliantavarez",
});
*/

/* Salvando no DB 
link.save().then((doc) => {
    console.log("Documento inserido com sucesso!", doc);
  }).catch((err) => {
    console.log("Erro ao inserir documento na coleção!", err);
  });
*/
