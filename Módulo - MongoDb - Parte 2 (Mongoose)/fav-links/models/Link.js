const mongoose = require("mongoose");

/* Criando schema da coleção */
const linkSchema = new mongoose.Schema({
  title: { type: String, required: true },  
  description: String,
  url: { type: String, required: true },
  click: { type: Number, default: 0 },
});

/* Criando modelo baseado no schema */
module.exports = mongoose.model("Link", linkSchema);
