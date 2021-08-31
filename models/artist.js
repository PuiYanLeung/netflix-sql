const { DataTypes } = require("sequelize");
const { connection } = require("../db");

const Artist = connection.define("Artist", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {});

const main = async() => {
    try {
        await Artist.sync({alter: true});
    } catch (error) {
        console.log(error);
    }
}

main();

module.exports = Artist;
