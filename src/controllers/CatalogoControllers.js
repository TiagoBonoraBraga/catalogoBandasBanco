const Catalogo = require("../models/Catalogo");

const getAll = async (req, res) => {
  try {
    const catalogoBandas = await Catalogo.findAll();
    res.render("index", { catalogoBandas });
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

module.exports = {
  getAll,
};
