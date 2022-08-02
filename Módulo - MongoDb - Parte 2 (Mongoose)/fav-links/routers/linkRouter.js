const express = require("express");
const router = express.Router();
const linkController = require("../controllers/linkController");

/* realizando busca no banco de dados */
router.get("/:title", linkController.redirect);

module.exports = router;
