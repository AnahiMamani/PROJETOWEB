const express = require("express");
const router = express.Router();
const agendamentoController = require("../controllers/agendamentoController");

// Rota para renderizar a página principal
router.get("/", agendamentoController.renderPrimeiraPagina);

// Rota para cadastrar os dados
router.post("/", agendamentoController.cadastrarAgendamento);

// Rota para a segunda página
router.get("/segunda", agendamentoController.renderSegundaPagina);

module.exports = router;
