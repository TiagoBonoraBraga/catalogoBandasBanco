const routes = require('express').Router();
const CatalogoController = require("../controllers/CatalogoControllers");

routes.get("/", CatalogoController.getAll);




module.exports = routes;