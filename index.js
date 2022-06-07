require("dotenv").config();//para o hiroko 
const express = require("express");
const { set } = require("express/lib/application");

const app = express();
const path = require("path"); // biblioteca do express para linkar path e guarda no app abaixo

const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));// achar os arquivos estaticos de js e css da pasta public para linkar o css e script
app.use(express.urlencoded());//pega as info de um body nesse ex o form q vem do ejs transformando em .json

const catalogoBandas = [

    {
        id: 1,
        nome:"Black Sabbath",
        descricao: "Black Sabbath foi uma banda de heavy metal britânica formada no ano de 1968 em Birmingham pelo guitarrista e principal compositor Tony Iommi, o baixista e principal letrista Geezer Butler, o vocalista Ozzy Osbourne e o baterista Bill Ward.",
        estilo: "Heavy Metal",
        imagem: "https://pre00.deviantart.net/2a9d/th/pre/f/2014/171/5/4/black_sabbath_logo__furry_version_with_fox__by_goldyfox-d7n6yxv.png",
    },

    {
        id: 2,
        nome:"Death",
        descricao: "Death foi uma banda dos Estados Unidos, originária de Orlando, Flórida, fundada em 1983 e considerada uma das principais desenvolvedoras e difusoras do death metal.",
        estilo: " Death metal",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAzhMzJAWj7xcqsR_b0BILTy-K9W2MFfzizy8YvGoQw4EgK3mJakBpCJzbLWJNNfMZ3ro&usqp=CAU",
    },

    {
        id: 3,
        nome:"Slayer",
        descricao: "Slayer foi uma banda norte-americana de thrash metal proveniente de Huntington Park, Califórnia, formada em 1981 pelos guitarristas Jeff Hanneman e Kerry King",
        estilo: "Thrash Metal",
        imagem: "https://logoeps.com/wp-content/uploads/2013/05/slayer-band-vector-logo.png",
    },
]

let message = "";
let bandas = undefined; // variavel q vai receber as puxar a info da index e trocar no objeto

//rota p index
app.get("/", (req, res) =>{//é o read do crud 

    setTimeout(() => {
        message = "";
     }, 1000);  

  res.render("index",{catalogoBandas, bandas, message});//estou pegando os dados da array e renderizando na pg
});

//rota p pg cadastrar
app.get("/cadastrar", (req, res) =>{//coloca o link da ancora
    res.render("cadastrar");//coloca o nome da pg ejs
});

//rota p pg editar
app.get("/editar/:id", (req, res) =>{//coloca o link da ancora
    let id = +req.params.id;
    bandas = catalogoBandas.find((bandas) => bandas.id === id);  
    res.render("editar",{bandas});//coloca o nome da pg ejs
  
});

//rota ppg detalhes
app.get("/detalhes/:id", (req, res) =>{//coloca o link da ancora
    let id = +req.params.id;
    bandas = catalogoBandas.find((bandas) => bandas.id === id); 
    res.render("detalhes",{bandas});//coloca o nome da pg ejs
});


//rota cadastrar
app.post("/create", (req,res) =>{
    let bandas = req.body;
    bandas.id = catalogoBandas.length + 1;
    catalogoBandas.push(bandas);
    message = `A banda:  ${bandas.nome}, foi cadastrada com sucesso`;
    res.redirect("/");
});

//rota editar
app.post("/update/:id", (req,res) =>{
   
    let id = +req.params.id - 1;    
    let newBanda = req.body;
    newBanda.id = id + 1;
    catalogoBandas[id] = newBanda;
    bandas = undefined;
    res.redirect("/");

});

app.get("/delete/:id", (req, res) =>{
    let id = +req.params.id - 1;
    delete catalogoBandas[id];
    res.redirect("/");
});




//porta

app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));
