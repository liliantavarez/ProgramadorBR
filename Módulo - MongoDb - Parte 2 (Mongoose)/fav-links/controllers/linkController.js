const Link = require("../models/Link");

const redirect = async (req, res) => {
  let title = req.params.title;
  try {
    let doc = await Link.findOne({ title });
    if (doc != null) {
      res.redirect(doc.url);
    } else {
      res.redirect("/");
    }
  } catch (err) {
    res.send(err);
  }
};

/* cadastrando no banco de dados */
const addLink = async (req, res) => {
  let link = new Link(req.body);
  try {
    let doc = await link.save();
    console.log("cadastrado");
    res.redirect("/");
  } catch (erro) {
    res.render("index", { erro, body: req.body });
  }
};

/* realizando busca no banco de dados */
const allLinks = async (req, res) => {
  try {
    let docs = await Link.find({});
    res.render("all", { links: docs });
  } catch (error) {
    res.send(error);
  }
};

const deleteLink = async (req, res) => {
  let id = req.params.id;
  if (!id) {
    id = req.body.id;
  }
  try {
    await Link.findByIdAndDelete(id);
    res.send(id);
  } catch (error) {
    res.status(404).send(error);
  }
};

/* Carregar link que será editado*/
const loadLink = async (req, res) => {
  let id = req.params.id;
  try {
    let doc = await Link.findOne({ _id: id });
    res.render("edit", { erro: false, body: doc });
  } catch (error) {
    res.status(404).send(error);
  }
};

/* Editar Link */
const editLink = async (req, res) => {
  let link = {};
  link.title = req.body.title;
  link.description = req.body.description;
  link.url = req.body.url;

  let id = req.params.id;
  if (!id) {
    id = req.body.id;
  }

  try {
    let doc = await Link.updateOne({ _id: id }, link);
    res.redirect("/");
  } catch (error) {
    res.render("/edit", { error, body: req.body });
  }
};

module.exports = {
  redirect,
  addLink,
  allLinks,
  deleteLink,
  loadLink,
  editLink,
};
