let fs = require("fs");
let args = process.argv.slice(2);

let name = args[0]
let fileName = name+".txt";

fs.readFile(fileName, "UTF8", (error, dados) => {
  
    if (error) throw error;

  fs.writeFile(name + "_Uppercase.txt", dados.toUpperCase(), (error) => {
    if (error) throw error;
  
    console.log("Arquivo gerado com sucesso");
  });

});