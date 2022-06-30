const http = require("http");
const url = require("url");
const fs = require("fs");

http
  .createServer((request, response) => {
    let path = url.parse(request.url).pathname;

    if (path == "" || path == "/") {
      path = "/index.html";
    }

    let fileName = "." + path;

    fs.readFile(fileName, (err, data) => {
      if (err) {
        response.writeHead(404, { "Content-Type": "text/html;charset=utf-8" });
        response.end("<h1>Pagina não encontrada!</h1>");
      } else {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(data);
        response.end();
      }
    });
  })
  .listen(3000, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Servidor rodando na porta 3000x");
    }
  });
