const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const linkRouter = require("./routers/linkRouter");
const mongoose = require("mongoose");

/* Definindo template */
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "templates"));

/* Conexão com o banco de dados */
mongoose.connect("mongodb+srv://develop:31412027@cluster0.usdiwxj.mongodb.net/?retryWrites=true&w=majority");
let db = mongoose.connection;

db.on("error", () => {
  console.log("Houve um erro!");
});

db.once("open", () => {
  console.log("Banco Carregado!");
});

/* Rotas */
app.use("/", linkRouter);


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
