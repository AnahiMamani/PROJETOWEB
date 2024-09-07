const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("projetoweb", "root", "", {
    host: "localhost",
    dialect: "mysql"
});

module.exports = {
    sequelize,
    DataTypes,
};
