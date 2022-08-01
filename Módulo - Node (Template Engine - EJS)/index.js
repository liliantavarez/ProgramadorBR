const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

let users = [
    {
        id: 0,
        name: "Lilian",
        phone: "(54) 9.9215-3543",
    },
    {
        id: 1,
        name: "Mario",
        phone: "(38) 9.9132-3433",
    },
    {
        id: 2,
        name: "Carla",
        phone: "(88) 9.4356-3233",
    },
];

app.get("/", (req, res) => {
    res.render("user", { users });
});
app.get("/about", (req, res) => {
    res.render("about");
});
app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
