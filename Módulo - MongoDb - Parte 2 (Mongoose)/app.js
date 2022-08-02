const express = require("express");
const app = express();
const port = 3000;
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

app.get("/", (req, res) => res.send("Hello Word"));

app.listen(port, () => {
  console.log("Servidor rodando....");
});

/* Criando schema da coleção */
const linkSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  url: { type: String, required: true },
  click: { type: Number, default: 0 },
});

/* Criando modelo baseado no schema */
const Link = mongoose.model("Link", linkSchema);

/* Criando novo documento que sera inserido na coleção */ 
let link = new Link({
  title: "Twitter",
  description: "Link para o twitter",
  url: "https://twitter.com/liliantavarez",
});

/* Salvando no DB */
link.save().then((doc) => {
    console.log("Documento inserido com sucesso!", doc);
  }).catch((err) => {
    console.log("Erro ao inserir documento na coleção!", err);
  });