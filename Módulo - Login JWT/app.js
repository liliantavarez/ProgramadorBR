require("dotenv").config();
const express = require("express");
const app = express();

app.listen(process.env.PORT, () => {
	console.log("Servidor rodando!");
});
