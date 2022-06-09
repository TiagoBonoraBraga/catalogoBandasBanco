const routes = require('express').Router();
const { route } = require('express/lib/application');
const CatalogoController = require("../controllers/CatalogoControllers");

routes.get("/", CatalogoController.getAll);

routes.get("/signup", CatalogoController.singup);

routes.post("/create", CatalogoController.create);

routes.get("/getById/:id/:method", CatalogoController.getById);

routes.post("/update/:id", CatalogoController.update);

routes.get("/remove/:id", CatalogoController.remove);

routes.get("/detalhes/:id", CatalogoController.detalhes);

module.exports = routes;