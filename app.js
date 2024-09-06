const express = require("express")
const app = express()
const handlebars = require("express-handlebars").engine
const bodyParser = require("body-parser") //faz a ponte entre o backend e o front end
const post = require("./moduls/post")

//o json funciona como um arraylistr com muitos campos,

app.engine("handlebars", handlebars({defaultLayout: "main"}))
app.set("view engine", "handlebars")

//bodyParser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
//fim bodyParser

app.post("/cadastrar",function(req,res){
    post.create({
        nome: req.bodyParser.nome //o primeiro nome é o name:nome da parte do nome no forms, ja o segundo "nome" se refere ao banco
    }).them(function(){
        console.log("Dados cadastrados é isso ai")
        res.send("Dados cadastrados é isso ai")
    }).catch(function(){
        console.log("Eroo ao gravar dados")
    })
    // testando se o nome ta sendo armaznado console.log(req.body.nome)
})

app.get("/", function(req,res){
    res.render("primeira_pagina")
})
app.get("/", function(req,res){
    res.render("segunda_pagina")
})

app.listen(8081,function(){
    console.log("Servidor activo!")
})