/*
Iniciar projeto: npm init -y
Instalar express: npm install express  
*/ 

// Importando o express
const express = require("express");
// Importando modulo que permite montar o caminho dos arquivos
const path = require('path')
//Recebendo o objeto express
const app = express();
//Definindo em qual diretorio estão os arquivos estaticos (HTML) 
app.use(express.static(path.join(__dirname,'client')))
//Definindo porta que sera usada
const PORT = 5000;

//Definindo com qual porta o express ira trabalhar
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta: ${PORT}`);
});
