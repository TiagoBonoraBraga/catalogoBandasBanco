const res = require("express/lib/response");
const Bandas = require("../models/Catalogo");
const Catalogo = require("../models/Catalogo");
const orderById = { order: [["id", "ASC"]] };

let message = "";
let type = "";

const getAll = async (req, res) => {
  try {
    setTimeout(() => {
      message = "";
      type = "";
    }, 1000)

    const catalogoBandas = await Catalogo.findAll(orderById);
    res.render("index", {
      catalogoBandas,
      bandasPut: null,
      bandasDel: null,
      message,
      type,
    });
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const singup = (req, res) => {
  try {
    res.render("signup", { message, type });
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const create = async (req, res) => {
  try {
    const bandas = req.body;
    if (!bandas.nome || !bandas.descricao || !bandas.estilo || !bandas.imagem) {
      message = "Preencha todos os campos para cadastrar!";
      type = "danger";
      return res.redirect("/signup");
    }

    await Catalogo.create(bandas);
    message = "Banda criada com sucesso!";
    type = "success";
    res.redirect("/");
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const getById = async (req, res) => {
  try {
    const method = req.params.method;
    const catalogoBandas = await Catalogo.findAll(orderById);
    const bandas = await Catalogo.findByPk(req.params.id);

    if (method == "put") {
      res.render("index", {
        catalogoBandas,
        bandasPut: bandas,
        bandasDel: null,
        message,
        type,
      });
    } else {
      res.render("index", {
        catalogoBandas,
        bandasPut: null,
        bandasDel: bandas,
        message,
        type,
      });
    }
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const update = async (req, res) => {
  try {
    const bandas = req.body;
    await Bandas.update(bandas, { where: { id: req.params.id } });
    message = "Banda atualizada com sucesso!";
    type = "success";
    res.redirect("/");
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const remove = async (req, res) => {
  try {
    await Catalogo.destroy({ where: { id: req.params.id } });
    message = "Banda removida com sucesso!";
    type = "success";
    res.redirect("/");
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const detalhes = async (req, res) => {
  try {
    const bandas = await Bandas.findByPk(req.params.id);
    res.render("detalhes", {
      bandas,
    });
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = {
  getAll,
  singup,
  create,
  getById,
  update,
  remove,
  detalhes
  
};
