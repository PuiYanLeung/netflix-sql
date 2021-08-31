const { DataTypes } = require("sequelize");
const { connection } = require("../db");

const Song = connection.define("Song", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {});

const main = async() => {
    try {
        await Song.sync({alter: true});
    } catch (error) {
        console.log(error);
    }
}

main();

module.exports = Song;
