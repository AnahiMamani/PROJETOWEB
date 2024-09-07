const Agendamento = require("../models/agendamento");

module.exports = {
    renderPrimeiraPagina: (req, res) => {
        res.render("primeira_pagina");
    },

    renderSegundaPagina: (req, res) => {
        res.render("segunda_pagina");// Renderiza a página chamada segunda_pagina.handlebars
    },

    cadastrarAgendamento: (req, res) => {
        Agendamento.create({
            nome: req.body.nome, //o primeiro nome é o name:nome da parte do nome no forms, ja o segundo "nome" se refere ao banco
            telefone: req.body.telefone,     // Telefone do formulário e coluna no banco
            origem: req.body.origem,         // Origem do formulário e coluna no banco
            data_contato: req.body.data_contato, // Data de contato do formulário e coluna no banco
            observacoes: req.body.observacao // Observações do formulário e coluna no banco
        })
            .then(() => {
                res.send("Dados cadastrados com sucesso!");
            })
            .catch((error) => {
                console.error("Erro ao gravar dados: ", error);
                res.send("Erro ao gravar dados");
            });
            // testando se o nome ta sendo armaznado console.log(req.body.nome)
    },
};
