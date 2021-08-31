const { DataTypes } = require("sequelize");
const { connection } = require("../db");

const Album = connection.define("Album", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {});

const main = async() => {
    try {
        await Album.sync({alter: true});
    } catch (error) {
        console.log(error);
    }
}

main();

module.exports = Album;
