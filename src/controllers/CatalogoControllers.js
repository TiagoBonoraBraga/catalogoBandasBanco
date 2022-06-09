const res = require("express/lib/response");
const Bandas = require("../models/Catalogo");
const Catalogo = require("../models/Catalogo");

const getAll = async (req, res) => {
  try {
    const catalogoBandas = await Catalogo.findAll();
    res.render("index", { catalogoBandas, bandasPut: null, bandasDel: null });
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const singup = (req, res) => {
  try {
    res.render("signup");
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const create = async (req, res) => {
  try {
    const bandas = req.body;
    if (!bandas) {
      return res.redirect("/signup");
    }

    await Catalogo.create(bandas);
    res.redirect("/");
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const getById = async (req, res) => {
  try {
    const method = req.params.method;
    const catalogoBandas = await Catalogo.findAll();
    const bandas = await Catalogo.findByPk(req.params.id);

    if (method == "put") {
      res.render("index", {
        catalogoBandas,
        bandasPut: bandas,
        bandasDel: null,
      });
    } else {
      res.render("index", {
        catalogoBandas,
        bandasPut: null,
        bandasDel: bandas,
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
    res.redirect("/");
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const remove = async (req, res) => {
  try {
    await Catalogo.destroy({ where: { id: req.params.id } });
    res.redirect("/");
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

module.exports = {
  getAll,
  singup,
  create,
  getById,
  update,
  remove,
};
