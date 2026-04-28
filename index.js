import express from "express";
const app = express();
const PORT = 3000;
// Configura o EJS como motor de views
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
// pasta onde ficam os arquivos .ejs
app.set("views", "./views"); 
//Liberar acesso a pasta public
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static(__dirname + '/public'))



app.get("/", (req, res) => {
  res.render("index");
});

/* 

Artistas

*/

app.get("/artista", (req, res) => {
  res.render("artista-lst");
});

app.get("/artista/cadastro", (req, res) => {
  res.render("artista-cad");
});

app.post("/artista/cadastro", (req, res) => {
  const {nome, pais, anoinicio} = req.body
  res.render("artista-cadok", {nome, pais, anoinicio});
});

app.get("/artista/:detalhe", (req, res) => {
  const parametro = req.params.detalhe
  let nome, pais, anoinicio, musica1, musica2
  switch (parametro) {
    case "Caetano":
      nome = "Caetano"
      pais = "BR"
      anoinicio = "11/11/1967"
      musica1 = "Alegria"
      musica2 = "Leaozinho"
      break;
      case "Gilberto":
      nome = "Gilberto"
      pais = "BR"
      anoinicio = "11/11/1967"
      musica1 = "Palco"
      musica2 = "Refazenda"
      break;
      case "Gal":
      nome = "Gal Costa"
      pais = "BR"
      anoinicio = "11/11/1967"
      break;
      case "Maria":
      nome = "M. Bet"
      pais = "BR"
      anoinicio = "11/11/1967"
      break;
  
    default:
      nome = "Erro no parâmetro"
      pais = ""
      anoinicio = ""
      break;
  }
  res.render("artista-det", {nome, pais, anoinicio, musica1, musica2});
});

/* 

Musicas

*/

app.get("/musica", (req, res) => {
  res.render("musica-lst");
});

app.get("/musica/cadastro", (req, res) => {
  res.render("musica-cad");
});

app.post("/musica/cadastro", (req, res) => {
  const {nome, pais, anoinicio} = req.body
  res.render("musica-cadok", {nome, pais, anoinicio});
});

app.get("/musica/:detalhe", (req, res) => {
  const parametro = req.params.detalhe
  let nome, artista
  switch (parametro) {
    case "Alegria":
      artista = "Caetano"
      nome = "Alegria Alegria"
      break;
      case "Leaozinho":
      artista = "Caetano"
      nome = "Leaozinho"
      break;
      case "Palco":
      artista = "Gilberto Gil"
      nome = "Palco"
      break;
      case "Refazenda":
      artista = "Gilberto Gil"
      nome = "Refazenda"
      break;
  
    default:
      artista = "Erro no parâmetro"
      nome = ""
      break;
  }
  res.render("musica-det", {nome, artista});
});

app.listen(PORT, ()=>{
 console.log(
    `Servidor rodando em http://localhost:${PORT}`)
});