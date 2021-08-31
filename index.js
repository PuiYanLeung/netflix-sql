require("dotenv").config();

const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");

const { Sequelize } = require("sequelize");
const { connection } = require("./db");
const {addSong, editSong, showSong, removeSong} = require("./utils");

const main = async() => {
    const argv = yargs(hideBin(process.argv)).argv;

    try {
        await connection.authenticate();

        if (argv.add && argv.name) {
            //node index.js --add --name 'Test song 4'
            const { _, add, ...options } = {...argv};
            delete options['$0'];
            console.log(options);

            await addSong(argv.name);
        }

        if (argv.edit && argv.name && argv.newName) {
            await editSong(argv.name, argv.newName);
        }

        if (argv.show && argv.name) {
            await showSong(argv.name);
        }

        if (argv.remove && argv.name) {
            await removeSong(argv.name);
        }

        //await connection.close();
        process.exit();
    } catch (error) {
        console.log(error)
    }
}

main();