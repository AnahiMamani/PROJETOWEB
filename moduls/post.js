//O sequelize auxilia na manipulação de banco de dados CRUD
//Caso o banco de dados fosse gerado manualmente não seria necessario a criação do deste bloco de tabela.

const db = require("./banco")
const Agendamentos = db.sequelize.define("agendamento",{
    nome:{
        type: db.Sequelize.STRING
    },
    telefone:{
        type: db.Sequelize.STRING
    },
    origem:{
        type: db.Sequelize.STRING
    },
    data_contato:{
        type: db.Sequelize.DATE
    },
    observacoes:{
        type: db.Sequelize.TEXT
    }
})

module.exports = Agendamentos//tosdos que exporta o post vai exportar tambem o modulo banco 
//Agendamentos.sync({force:true})