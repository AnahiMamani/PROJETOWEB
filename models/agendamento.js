//O sequelize auxilia na manipulação de banco de dados CRUD
//Caso o banco de dados fosse gerado manualmente não seria necessario a criação do deste bloco de tabela.

const { DataTypes, sequelize } = require("./banco"); // Importa DataTypes e sequelize// Importa a configuração do banco de dados

const Agendamento = sequelize.define("agendamento", {
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    origem: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    data_contato: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    observacoes: {
        type: DataTypes.TEXT,
    },
});

module.exports = Agendamento//tosdos que exporta o post vai exportar tambem o modulo banco 
//Agendamentos.sync({force:true})