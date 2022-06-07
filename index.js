require("dotenv").config();//para o hiroko 
const express = require("express");
const { set } = require("express/lib/application");

const app = express();
const path = require("path"); // biblioteca do express para linkar path e guarda no app abaixo
const routes = require("./src/routes/routes");



app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));// achar os arquivos estaticos de js e css da pasta public para linkar o css e script
app.use(express.urlencoded());//pega as info de um body nesse ex o form q vem do ejs transformando em .json
app.use(routes);


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));
