const express = require("express");
const router = express.Router();
const linkController = require("../controllers/linkController");

router.get("/", linkController.allLinks);
router.get("/add", (req, res) => res.render("index", { erro: false, body: {} }));
router.get("/:title", linkController.redirect);
router.get('/edit/:id', linkController.loadLink)


/*Recebe dados do usuario para cadastrar no bd*/
router.post("/", express.urlencoded({ extended: true }),linkController.addLink);
router.post('/edit/:id', express.urlencoded({ extended: true,  erro: false, body: {}}), linkController.editLink)
/*Deletando documentos no banco de dados*/
router.delete("/:id", linkController.deleteLink);
router.delete("/", express.json(), linkController.deleteLink);

module.exports = router;
