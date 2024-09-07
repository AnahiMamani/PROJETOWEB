const express = require("express")
const app = express()
const handlebars = require("express-handlebars").engine
const bodyParser = require("body-parser") //faz a ponte entre o backend e o front end
const agendamentoRoutes = require("./routes/agendamentoRoutes"); // Importando as rotas

//o json funciona como um arraylistr com muitos campos
// Configurações do express
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.engine("handlebars", handlebars({ defaultLayout: "main" }))
app.set("view engine", "handlebars")

// Use as rotas importadas
app.use("/", agendamentoRoutes); // Certifique-se de usar a rota raiz "/"

// Iniciando o servidor
app.listen(8021, function () {
    console.log("Servidor ativo na porta 8021!");
});