/*
Iniciar projeto: npm init -y
Instalar express: npm install express  
*/ 

// Importando o express
const express = require("express");
//Recebendo o objeto express
const app = express();
//Definindo porta que sera usada
const PORT = 5000;

//Definindo com qual porta o express ira trabalhar
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta: ${PORT}`);
});
